<template>
  <div>
    <narmalNav></narmalNav>
    <div class="menu_item">
      <div class="dropdown dropdown-large">
        <a
          href="#"
          id="tasto_make_plot"
          data-toggle="dropdown"
          class="dropdown-toggle"
          >Sitemap<b class="caret"></b
        ></a>

        <ul class="dropdown-menu dropdown-menu-large row">
          <li class="col-sm-3">
            <ul>
              <li class="dropdown-header">Getting acquainted with CRYSTAL</li>
              <li>
                <a href="tutorial.html?td=others&tf=quick"
                  >Quick tour: Single-point Energy Calculation</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=others&tf=quick_opt"
                  >Quick tour: Geometry Optimization</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=others&tf=quick_freq"
                  >Quick tour: Harmonic Vibrational Frequencies</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=geometry&tf=geom_tut"
                  >CRYSTAL Input: Geometry</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=basis_set&tf=basis_set_tut"
                  >CRYSTAL Input: Basis set</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=hamil_scf&tf=hamil_scf_tut"
                  >CRYSTAL Input: SCF & Other</a
                >
              </li>
              <li class="divider"></li>
              <li class="dropdown-header">Basic options</li>
              <li>
                <a href="tutorial.html?td=barebone&tf=basic_tutorials"
                  >All-inclusive Introduction</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=totalenergy&tf=total_energy_tut"
                  >Single-point Energy Calculation</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=SCF_conv&tf=conv_tut"
                  >SCF Convergence Tools</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=optgeom&tf=opt_tut"
                  >Geometry Optimization</a
                >
              </li>
            </ul>
          </li>
          <li class="col-sm-3">
            <ul>
              <li class="dropdown-header">How to model...</li>
              <li>
                <a href="tutorial.html?td=surfaces&tf=surfaces_tut">Surfaces</a>
              </li>
              <li>
                <a href="tutorial.html?td=nanotube&tf=nanotube">Nanotubes</a>
              </li>
              <li>
                <a href="tutorial.html?td=tuto_nano&tf=nano_md_g2"
                  >NanoRods & NanoCrystals</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=fullerene_tut&tf=tutorial_fullerene"
                  >Fullerenes</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=solsol_tut&tf=solsol_tut"
                  >Disordered Systems & Solid Solutions</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=metals&tf=index">Metallic systems</a>
              </li>
              <li>
                <a href="tutorial.html?td=interfaces&tf=inter_tut"
                  >Metal/Oxide Interfaces</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=defects&tf=defects_tut">Defects</a>
              </li>
              <li>
                <a href="tutorial.html?td=ferromagn&tf=mag_tut_new"
                  >Magnetic Systems</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=MOLDRAW_tuto&tf=index"
                  >Structural manipulation with the MOLDRAW graphical package</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=mwnanotube&tf=MW_tutorial"
                  >Multi-Wall Nanotubes</a
                >
              </li>
            </ul>
          </li>
          <li class="col-sm-3">
            <ul>
              <li class="dropdown-header">One-electron properties</li>
              <li>
                <a href="tutorial.html?td=properties&tf=properties_tut"
                  >Band Structure, Density of States, Charge Density map</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=topond&tf=topond"
                  >TOPOND (Charge Density Topological Analysis)</a
                >
              </li>
              <!--<li><a href="#">Electron Transport Properties</a></li>-->
              <li>
                <a href="tutorial.html?td=emd&tf=emd"
                  >Electron Momentum Density</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=3d_maps&tf=index"
                  >Color-coded 3D plots</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=orbitals&tf=orbitals"
                  >How to plot Crystalline Orbitals</a
                >
              </li>
              <li class="divider"></li>
              <li class="dropdown-header">
                Lattice dynamics &<br />thermodynamics
              </li>
              <li>
                <a href="tutorial.html?td=vibfreq&tf=vibfreq_tut"
                  >Vibrational Frequencies Calculation</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=dispersion&tf=dispersion-ht"
                  >Phonon Dispersion</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=thermo&tf=thermo2">Thermodynamics</a>
              </li>
              <li>
                <a href="tutorial.html?td=Tutorial_QHA&tf=QHA"
                  >Quasi - Harmonic Approximation</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=eos&tf=eos_tut">Equation of State</a>
              </li>
            </ul>
          </li>
          <li class="col-sm-3">
            <ul>
              <li class="dropdown-header">Response properties</li>
              <li>
                <a href="tutorial.html?td=cphf&tf=cphf"
                  >Dielectric: Coupled Perturbed HF/DFT</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=dielec_2013&tf=dielec_tut"
                  >Dielectric: Finite Field</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=elapiezophoto&tf=elapiezophoto"
                  >Elastic Piezoelectric Photoelastic</a
                >
              </li>
              <li class="divider"></li>
              <li class="dropdown-header">Advanced options</li>
              <li>
                <a href="tutorial.html?td=ts&tf=tutorial-ts_crystal"
                  >Transition State Search</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=4f-in-core-ecp&tf=4f-in-core-ecp_tuto"
                  >How to use 4f-in-core ECPs</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=tuto_HPC&tf=tuto_hpc"
                  >How to run CRYSTAL on HPC</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=disp_DFT&tf=disp_DFT_tuto"
                  >Dispersion & BSSE corrections</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=cryscor_2013&tf=cryscor"
                  >CRYSCOR: the MP2 energy correction (only in CRYSTAL14)</a
                >
              </li>
              <li>
                <a href="tutorial.html?td=thermoelectrics&tf=boltztra"
                  >Electron Transport Properties</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu_item">
      <a href="http://crysplot.crystalsolutions.eu/index.html" target="_blank"
        >CRYSPLOT</a
      >
    </div>
    <div class="menu_item">
      <a href="tutorial.html?td=others&tf=howtorun">How to run...</a>
    </div>
    <div class="menu_item">
      <div class="dropdown">
        <a
          href="#"
          id="tasto_manuals"
          data-toggle="dropdown"
          class="dropdown-toggle"
          >Manuals<b class="caret"></b
        ></a>
        <ul class="dropdown-menu">
          <li>
            <a
              target="new"
              href="http://www.crystal.unito.it/Manuals/crystal17.pdf"
              >CRYSTAL17 User's Manual</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import normalNav from "../components/normalNav.vue";
export default {
  name: "myModels",
  components: { normalNav },

  data() {
    return {
      input: "",
      textarea2: ""
    };
  }
};
</script>
<style scoped>

.dropbtn_menu_sx {
    color: white;
    padding: 16px;
    margin-bottom: 5px;
    font-size: 13px;
    border: none;
    height: 100px;
    width: 100px;
    border-radius: 45%;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f0f0f0;
    min-width: 100%;
    /*box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);*/
    z-index: 1;
    margin-left:100px;
    overflow:auto;
    top: 0px;
    width: 200px;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}
/*END*/
.dropbtn_menu_sx {
  color: white;
  padding: 16px;
  margin-bottom: 5px;
  font-size: 13px;
  border: none;
  height: 100px;
  width: 100px;
  border-radius: 45%;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f0f0f0;
  min-width: 100%;
  /*box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);*/
  z-index: 1;
  margin-left: 100px;
  overflow: auto;
  top: 0px;
  width: 200px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}
/*END*/
.selector {
  position: relative;
  left: 0;
  top: 0%;
  width: 690px;
  height: 690px;
  margin-top: 35px;
  margin-left: 10px;
  margin-bottom: 20px;
}

/*PER SPOSTARE IL CENTRO DELLA MARGHERITA*/
.bottone_margherita,
.bottone_margherita:disabled {
  background-image: url("../assets/card/1.png") !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  cursor: pointer;
  /*background-size: contain!important;*/
  position: absolute;
  width: 220px;
  height: 220px;
  margin-left: 320px;
  margin-top: 245px;
  /*background: #4a9bbf;*/
  background: #f0f0f0;
  border-radius: 50%;
  border: 0;
  color: white;
  font-size: 20px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.1s;
  font-weight: bold;
}

/*PER SPOSTARE I PETALI DELLA MARGHERITA*/
.selector ul {
  position: absolute;
  list-style: none;
  padding: 50px;
  margin: 0;
  top: 170px;
  right: -20px;
  bottom: -20px;
  left: 49px;
}

.selector li {
  position: absolute;
  width: 0;
  height: 50%;
  margin: 0 50%;
  -webkit-transform: rotate(-360deg);
  transition: all 0.8s ease-in-out;
}

.selector li input {
  display: none;
}

.selector li input + label {
  position: relative;
  left: 80%;
  bottom: 100%;
  width: 0;
  height: 0;
  line-height: 1px;
  margin-left: 100px;
  background: #f9f9f9;
  border-radius: 50%;
  text-align: center;
  font-size: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.8s ease-in-out, color 0.1s, background 0.1s;
}

.selector li input + label:hover {
  color: white;
}

.selector.open li input + label {
  width: 200px;
  height: 200px;
  line-height: 30px;
  margin: 0px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}

#content1 {
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);
  margin-left: 80px;
  margin-top: -80px;
}

#content1 > a:hover {
  background-color: #97c2cd;
}

#content2 {
  -ms-transform: rotate(39.4286deg); /* IE 9 */
  -webkit-transform: rotate(39.4286deg); /* Safari */
  transform: rotate(39.4286deg);
  margin-top: -50px;
  margin-left: 250px;
}

#content2 > a:hover {
  background-color: #7fbf7f;
}

#content3 {
  -ms-transform: rotate(-12.857deg); /* IE 9 */
  -webkit-transform: rotate(-12.857deg); /* Safari */
  transform: rotate(-12.857deg);
  margin-left: 320px;
  margin-top: -250px;
}

#content3 > a:hover {
  background-color: #a4a194;
}

#content4 {
  -ms-transform: rotate(-64.286deg); /* IE 9 */
  -webkit-transform: rotate(-64.286deg); /* Safari */
  transform: rotate(-64.286deg);
  margin-left: 260px;
  margin-top: -360px;
}

#content4 > a:hover {
  background-color: #7f7fc7;
}

#content5 {
  -ms-transform: rotate(-115.714deg); /* IE 9 */
  -webkit-transform: rotate(-115.714deg); /* Safari */
  transform: rotate(-115.714deg);
  margin-left: 100px;
  margin-top: -420px;
}

#content5 > a:hover {
  background-color: #bf7f7f;
}

#content6 {
  -ms-transform: rotate(-167.143deg); /* IE 9 */
  -webkit-transform: rotate(-167.143deg); /* Safari */
  transform: rotate(-167.143deg);
  margin-left: -50px;
  margin-top: -230px;
}

#content6 > a:hover {
  background-color: #ffb27f;
}

#content7 {
  -ms-transform: rotate(-218.571deg); /* IE 9 */
  -webkit-transform: rotate(-218.571deg); /* Safari */
  transform: rotate(-218.571deg);
  margin-left: -10px;
  margin-top: -120px;
}

#content7 > a:hover {
  background-color: #ff7f7f;
}

.dropdown1 {
  margin-top: 47px;
}

.paragrafo_petali {
  font-size: 20px;
  font-weight: 600;
}

.sez1 {
  background-image: url("../assets/card/1.png") !important;
  background-repeat: no-repeat !important;
  /*background-size: 150px 150px!important;*/
}

.sez1:hover {
  background-color: #31859c;
  background-image: none !important;
}

.sez2 {
  background-image: url("../assets/card/1.png") !important;
  background-repeat: no-repeat !important;
  /*background-size: 150px 150px!important;*/
}

.sez2:hover {
  background-color: #008000;
  background-image: none !important;
}

.sez3 {
  background-image: url("../assets/card/1.png") !important;
  background-repeat: no-repeat !important;
  /*background-size: 150px 150px!important;*/
}

.sez3:hover {
  background-color: #4a452a;
  background-image: none !important;
}

.sez4 {
  background-image: url("../assets/card/1.png") !important;
  background-repeat: no-repeat !important;
  /*background-size: 150px 150px!important;*/
}

.sez4:hover {
  background-color: #000090;
  background-image: none !important;
}

.sez5 {
  background-image: url("../assets/card/1.png") !important;
  background-repeat: no-repeat !important;
  /*background-size: 150px 150px!important;*/
}

.sez5:hover {
  background-color: #800000;
  background-image: none !important;
}

.sez6 {
  background-image: url("../assets/card/1.png") !important;
  background-repeat: no-repeat !important;
  /*background-size: 150px 150px!important;*/
}

.sez6:hover {
  background-color: #ff6600;
  background-image: none !important;
}

.sez7 {
  background-image: url("../assets/card/1.png") !important;
  background-repeat: no-repeat !important;
  /*background-size: 150px 150px!important;*/
}

.sez7:hover {
  background-color: #ff0000;
  background-image: none !important;
}

.dropdown-content1 {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  margin-left: 200px;
  overflow: auto;
  margin-top: -150px;
  width: 250px;
}

.dropdown-content1 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content1 a:hover {
  background-color: #cccccc;
  color: white;
}

.dropdown:hover .dropdown-content1 {
  display: block;
}

.bottoni {
  background-color: #cccccc;
}
.bottoni:hover {
  z-index: 10 !important;
}
/*Large dropdown menu*/
/*START*/
.dropdown-large {
    position: static !important;
}
.dropdown-menu-large {
    margin-left: -300px;
    margin-right: 16px;
    padding: 20px 0px;
    width: 1100px;
}
.dropdown-menu-large > li > ul {
    padding: 0;
    margin: 0;
}
.dropdown-menu-large > li > ul > li {
    list-style: none;
}
.dropdown-menu-large > li > ul > li > a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.428571429;
    color: #333333;
    white-space: normal;
}
.dropdown-menu-large > li ul > li > a:hover,
.dropdown-menu-large > li ul > li > a:focus {
    text-decoration: none;
    color: #262626;
    background-color: #f5f5f5;
}
.dropdown-menu-large .disabled > a,
.dropdown-menu-large .disabled > a:hover,
.dropdown-menu-large .disabled > a:focus {
    color: #999999;
}
.dropdown-menu-large .disabled > a:hover,
.dropdown-menu-large .disabled > a:focus {
    text-decoration: none;
    background-color: transparent;
    background-image: none;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
    cursor: not-allowed;
}
.dropdown-menu-large .dropdown-header {
    color: #428bca;
    font-size: 18px;
}
@media (max-width: 768px) {
    .dropdown-menu-large {
        margin-left: 0 ;
        margin-right: 0 ;
    }
    .dropdown-menu-large > li {
        margin-bottom: 30px;
    }
    .dropdown-menu-large > li:last-child {
        margin-bottom: 0;
    }
    .dropdown-menu-large .dropdown-header {
        padding: 3px 15px !important;
    }
}
/*END*/
</style>
