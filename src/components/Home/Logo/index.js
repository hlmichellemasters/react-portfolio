import './index.scss';
import LogoM from '../../../assets/images/michelle-M.png';
import LogoS from '../../../assets/images/logo-s.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%">
        <g className="svg-container" transform="scale(1.5)">
          <path
            opacity="1"
            fill="#F8F4EA"
            d="
M94.798050,51.604973 
	C84.190155,70.528061 68.593407,84.206299 52.035328,97.273529 
	C37.919910,86.717674 24.875523,75.286377 14.707742,61.072170 
	C7.826116,51.451885 3.192639,40.726219 5.037373,28.387749 
	C6.420514,19.136641 14.239998,9.130593 24.919067,6.986841 
	C36.358353,4.690480 44.819702,9.506953 51.503052,17.569757 
	C55.305241,14.685542 58.658157,10.788561 62.883209,9.174466 
	C80.004631,2.633574 92.762161,9.706410 97.987312,25.853416 
	C100.855721,34.717484 98.293610,43.063324 94.798050,51.604973 
M33.800159,74.304016 
	C32.909569,74.004639 32.018978,73.705254 31.128387,73.405876 
	C31.028975,73.623024 30.929564,73.840179 30.830151,74.057327 
	C31.640579,74.574409 32.451008,75.091492 33.696236,76.119415 
	C39.668026,81.656372 45.639820,87.193321 51.865410,92.965599 
	C58.655464,86.872841 64.696373,81.452301 70.737289,76.031761 
	C70.444176,75.657951 70.151062,75.284149 69.857941,74.910347 
	C67.059647,75.963066 63.965866,76.563805 61.523247,78.160606 
	C56.082100,81.717628 48.022011,82.107277 42.229393,78.753212 
	C39.637310,77.252335 36.789703,76.192757 33.800159,74.304016 
M43.933704,32.602680 
	C46.202911,29.500317 48.472118,26.397951 50.734169,23.305368 
	C45.691025,13.524482 30.630266,6.213817 20.509352,12.730616 
	C10.181779,19.380482 2.747053,33.436901 13.207250,50.330090 
	C14.381528,49.477882 15.488460,48.009575 16.736601,47.877693 
	C24.298431,47.078705 27.120535,42.650333 26.843592,35.543072 
	C26.811817,34.727631 26.901999,33.899757 27.011564,33.087894 
	C27.381329,30.348036 28.881620,29.699606 31.335167,30.761726 
	C34.133465,31.973087 36.890812,33.340359 39.794128,34.213860 
	C40.782127,34.511108 42.159069,33.515610 43.933704,32.602680 
M77.996078,38.834572 
	C77.996078,41.128975 77.996078,43.423374 77.996078,44.951305 
	C82.723343,46.651405 86.854622,48.137165 91.094322,49.661919 
	C99.698898,32.502449 95.284988,21.901022 84.798286,13.600219 
	C81.902740,11.308234 77.240845,9.952730 73.541908,10.226692 
	C64.423622,10.902039 57.027920,15.323321 52.961388,23.556456 
	C55.823505,27.217388 58.924057,31.183304 62.114784,35.264565 
	C63.471497,34.670486 64.662422,34.208935 65.800377,33.641216 
	C74.694656,29.203896 74.691521,29.197603 77.996078,38.834572 
M44.030556,74.550552 
	C54.001049,83.071053 63.432766,74.453285 64.825439,65.090523 
	C66.909737,51.078098 60.320953,39.615452 51.822998,28.099127 
	C46.732655,35.740257 42.174477,42.620358 39.835781,51.024639 
	C37.476963,59.501244 37.623112,67.075859 44.030556,74.550552 
M28.999451,48.172081 
	C30.545771,53.046375 32.092091,57.920670 33.707123,63.011555 
	C35.634369,54.632343 37.398785,46.961071 39.300964,38.690834 
	C36.879662,37.538727 33.777550,36.062679 30.173903,34.347992 
	C29.733246,39.186440 29.365343,43.226036 28.999451,48.172081 
M69.003807,61.677361 
	C69.257156,61.938927 69.510506,62.200493 69.763855,62.462059 
	C69.828789,62.340622 69.889297,62.216568 69.959290,62.098114 
	C74.966469,53.624226 75.936577,44.616405 73.280807,34.458500 
	C70.036896,36.121952 66.884956,37.738239 65.035065,38.686848 
	C66.483665,46.789646 67.740585,53.820240 69.003807,61.677361 
M75.433510,66.046921 
	C78.101517,62.398514 80.548157,58.558632 83.495094,55.151478 
	C86.965744,51.138824 83.927483,50.721657 81.059273,50.009285 
	C80.151421,49.783810 79.217957,49.661400 79.450256,49.704136 
	C76.402557,56.270081 73.435394,62.662518 70.395523,69.211586 
	C71.742363,68.437447 73.338249,67.520164 75.433510,66.046921 
M20.987299,56.480896 
	C26.176203,64.671494 28.856459,67.253517 32.310505,67.864685 
	C29.878519,62.011959 27.316713,55.846809 24.722904,49.604649 
	C23.074009,50.038742 20.685894,50.667446 18.221292,51.316288 
	C19.051182,53.046185 19.750027,54.502926 20.987299,56.480896 
M71.385208,74.978340 
	C71.900307,74.709358 72.415405,74.440384 72.930504,74.171410 
	C72.688110,73.805214 72.445724,73.439011 72.203331,73.072815 
	C71.679787,73.572884 71.156235,74.072952 71.385208,74.978340 
M34.167255,68.836761 
	C33.817825,68.902191 33.468395,68.967613 33.118961,69.033035 
	C33.191868,69.275093 33.305626,69.732292 33.331623,69.727356 
	C33.819744,69.634659 34.297459,69.487190 34.167255,68.836761 
M68.585136,69.563164 
	C68.163040,69.870895 67.740952,70.178627 67.318863,70.486366 
	C67.892853,70.405975 68.466850,70.325577 68.585136,69.563164 
z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;