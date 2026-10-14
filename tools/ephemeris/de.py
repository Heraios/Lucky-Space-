import numpy as np
D='/tmp/claude-0/pkgs/de421-2008.1/de421/'
c=np.load(D+'constants.npy',allow_pickle=True); K={k.decode():float(v) for k,v in c}
A,W=K['jalpha'],K['jomega']; AU=K['AU']
names=['sun','mercury','venus','earthmoon','mars','jupiter','saturn','uranus','neptune','pluto']
GM=dict(sun=K['GMS'],mercury=K['GM1'],venus=K['GM2'],earthmoon=K['GMB'],mars=K['GM4'],jupiter=K['GM5'],saturn=K['GM6'],uranus=K['GM7'],neptune=K['GM8'],pluto=K['GM9'])
C={n:np.load(D+'jpl-%s.npy'%n) for n in names}
eps=np.radians(84381.448/3600)
R=np.array([[1,0,0],[0,np.cos(eps),np.sin(eps)],[0,-np.sin(eps),np.cos(eps)]])  # equatorial->ecliptic
def state(n,jd):
    co=C[n]; N=co.shape[0]; L=(W-A)/N
    i=min(int((jd-A)//L),N-1); x=2*((jd-A)-i*L)/L-1
    k=co.shape[2]; T=np.zeros(k); dT=np.zeros(k); T[0]=1; T[1]=x; dT[1]=1
    for j in range(2,k): T[j]=2*x*T[j-1]-T[j-2]; dT[j]=2*T[j-1]+2*x*dT[j-1]-dT[j-2]
    p=co[i]@T; v=co[i]@dT*2/L
    return R@(p/AU), R@(v/AU)   # AU, AU/day, ecliptic J2000, SSB
