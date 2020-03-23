import { Component, h, State } from '@stencil/core';
import Cards from '../cards/cards';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  componentDidLoad() {
    this.fecthData();
  }

  @State() reportData: any = [];

  fecthData() {
    fetch("https://kustom.radio-canada.ca/coronavirus/colombia")
      .then(json => json.json())
      .then((res) => {
        console.log(res["0"]);
        this.reportData = res["0"];
      })
  }

  renderCards() {
    // console.log(`reportData= ${this.reportData}`);
    // if(this.reportData.lenght ==  null) return;
    let listReports: any = []
    let names = ["Confirmed", "Deaths", "Recovered"];
    for (let i = 0; i < 3; i++) {
      listReports.push(<Cards name={names[i]} value={this.reportData[names[i]]} />);
    }

    return listReports;
  }

  render() {
    return [
      <ion-content >

        <h1 class="title">Reporte de Casos COVID-19 en Colombia</h1>
        <figure class="girl_w_flag" >
          <ion-img src="./assets/girl_w_flag.png" class="" />
        </figure>
        <div class="wrapper-cards">
          {this.renderCards()}
        </div>
        <div class="bottom_box">
          <button class="btn-update" onClick={() => {this.fecthData()}} >
            Actualizar Reporte
        </button>

          <p>
            El sitio podrá ser visualizado de mejor manera en dispositivos móviles; puedes instalar la aplicación si aceptas <span>agregarla a tu pantalla de inicio. </span>
            Aun hay funcionalidades por realizar. Comparte con tus familiares y amigos

           </p>
          <a href="#" class="btn-repo">
            repo
              <ion-icon name="logo-github" size="23"></ion-icon>
          </a>

        </div>
      </ion-content>
    ];
  }
}
