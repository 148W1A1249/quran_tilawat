
import Particles from 'react-particles-js';
import ParticlesConfig from './config/particle-config';

const ParticleBackground = ()=>{
    return<>
     <Particles style={{position:"absolute",top:"0",zIndex:"-1"}}
      params={ParticlesConfig} />
      
    </>;
};

export default ParticleBackground;