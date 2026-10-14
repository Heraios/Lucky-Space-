from sim import *; from ls import *
import json, time
J2000=2451545.0; YR=365.25
OM=np.radians(7.605/3600)/YR   # Mars spin-axis precession rate, rad/day (Le Maistre+ 2023)
def nvec(sim):
    r,v=helio(sim,'mars'); n=np.cross(r,v); return n/np.linalg.norm(n)
sim=make(dt=2.0); p=P0.copy(); n=nvec(sim)
alpha=OM/(p@n)
def jd_of(y): return J2000+(y-2000)*YR
t0=time.time(); step=50.0
def adv(target):
    global p
    while sim.t<target-1e-9:
        h=min(step,target-sim.t); n1=nvec(sim); sim.integrate(sim.t+h,exact_finish_time=1); n2=nvec(sim)
        nm=(n1+n2); nm/=np.linalg.norm(nm)
        # rotate p about nm by angle -alpha*(p.n)*h (retrograde precession)
        th=-alpha*(p@nm)*h; k=nm
        p=p*np.cos(th)+np.cross(k,p)*np.sin(th)+k*(k@p)*(1-np.cos(th)); p/=np.linalg.norm(p)
adv(jd_of(15995))
print('reached', time.time()-t0)
GMS=GM['sun']
def els(n, mu):
    r,v=helio(sim,n); return [round(sim.t,4)]+[float(x) for x in np.concatenate([r,v])]
out={'mars':[],'pluto':[],'pole':[],'mu_mars':GMS+GM['mars'],'mu_pluto':GMS+GM['pluto']}
end=jd_of(16106)
k=0
while sim.t<end:
    if k%20==0:
        out['pluto'].append(els('pluto',0))
        out['pole'].append([round(sim.t,4)]+[float(x) for x in p])
    out['mars'].append(els('mars',0)); k+=1
    adv(sim.t+20.0)
r,v=helio(sim,'mars'); print('obliquity now', np.degrees(np.arccos(p@nvec(sim))))
json.dump(out,open('states.json','w'))
print(len(out['mars']),len(out['pluto']), time.time()-t0)
