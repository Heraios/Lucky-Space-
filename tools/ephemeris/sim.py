import rebound, numpy as np
from de import *
def make(jd0=2451545.0, dt=1.0):
    sim=rebound.Simulation(); sim.G=1.0
    for n in names:
        p,v=state(n,jd0); sim.add(m=GM[n],x=p[0],y=p[1],z=p[2],vx=v[0],vy=v[1],vz=v[2],name=n)
    sim.move_to_com(); sim.integrator='whfast'; sim.dt=dt; sim.t=jd0
    return sim
def helio(sim,n):
    s=sim.particles[0]; q=sim.particles[names.index(n)]
    return np.array([q.x-s.x,q.y-s.y,q.z-s.z]), np.array([q.vx-s.vx,q.vy-s.vy,q.vz-s.vz])
