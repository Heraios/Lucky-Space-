import json, numpy as np
from ls import Ls
d=json.load(open('states.json'))
def jdg(y,m,dd):  # proleptic Gregorian -> JD (0h)
    a=(14-m)//12; y2=y+4800-a; m2=m+12*a-3
    return dd+(153*m2+2)//5+365*y2+y2//4-y2//100+y2//400-32045-0.5
def near(arr,jd): return min(arr,key=lambda e:abs(e[0]-jd))
def kep(st,mu,jd):  # propagate via rebound for simplicity
    import rebound
    s=rebound.Simulation(); s.G=1; s.add(m=mu); s.add(x=st[1],y=st[2],z=st[3],vx=st[4],vy=st[5],vz=st[6]); s.integrator='whfast'; s.dt=0.5
    s.t=st[0]; s.integrate(jd,exact_finish_time=1); q=s.particles[1]; return np.array([q.x,q.y,q.z]),np.array([q.vx,q.vy,q.vz])
def at(jd):
    rm,vm=kep(near(d['mars'],jd),d['mu_mars'],jd); rp,_=kep(near(d['pluto'],jd),d['mu_pluto'],jd)
    p=np.array(near(d['pole'],jd)[1:]); return rm,vm,rp,p
jd=jdg(16008,4,29)
rm,vm,rp,p=at(jd)
D=np.linalg.norm(rp-rm); c=173.144632674  # AU/day
print('JD',jd,'dist AU',D,'lag h',D/c*24,'Ls',Ls(rm,vm,p),'pluto r',np.linalg.norm(rp),'mars r',np.linalg.norm(rm))
s=-rm; u=rp-rm; print('sun-pluto sep from mars deg', np.degrees(np.arccos(s@u/np.linalg.norm(s)/np.linalg.norm(u))))
# lag range over 16000-16100, Ls of perihelion
lags=[];
for e in d['mars']:
    rp,_=kep(near(d['pluto'],e[0]),d['mu_pluto'],e[0]); lags.append(np.linalg.norm(rp-np.array(e[1:4]))/c*24)
print('lag min max', min(lags), max(lags))
best=min(d['mars'][1000:1040],key=lambda e:np.linalg.norm(e[1:4])); print('perihelion approx Ls', Ls(np.array(best[1:4]),np.array(best[4:7]),np.array(near(d['pole'],best[0])[1:])))
