import numpy as np
from de import R
def radec(ra,dec):
    ra,dec=np.radians(ra),np.radians(dec); return np.array([np.cos(dec)*np.cos(ra),np.cos(dec)*np.sin(ra),np.sin(dec)])
P0=R@radec(317.68143,52.88650)   # IAU Mars pole J2000, to ecliptic
def Ls(r,v,p):
    n=np.cross(r,v); n/=np.linalg.norm(n)
    e1=np.cross(p,n); e1/=np.linalg.norm(e1); e2=np.cross(n,e1); s=-r
    return np.degrees(np.arctan2(s@e2,s@e1))%360
