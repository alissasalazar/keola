import { Component } from '@angular/core';
import { Subscription } from 'src/app/models/suscription.module';
import { homeService } from 'src/app/services/home.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  subscription: any;
  cronograms: any;
  expandedRowIndex: number | null = null;
  i: number = 0;
  constructor(private srvHome: homeService) {

  }

  ngOnInit(): void {
    this.getSuscriptions()
  }
  getSuscriptions() {
    const id = '12853'
    this.srvHome.getSubscription(id).subscribe((data: any) => {
      this.subscription = data.objModel.suscriptions
      console.log('QUE ME DA LA DATA', this.subscription);


    })


  }

  toggleRowCronograma(row: any, i: number) {
    this.i = i
    this.expandedRowIndex = this.expandedRowIndex === i ? null : i;
    const idSusc = row.id
    this.srvHome.getCronograma(idSusc).subscribe((data: any) => {
      console.log('QUE ME DA LA DATA 2', data);
      this.cronograms = data.objModel
this. showCronograms(this.cronograms)

    })
  }
  showCronograms(cronograms: any[]) {
    let htmlContent = `
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Detalle del Cronograma</th>
            <th>Pago</th>
          </tr>
        </thead>
        <tbody>
    `;

    cronograms.forEach((cronogram, index) => {
      htmlContent += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${cronogram.quoteDescription}</td>
          <td>S/. ${cronogram.amortization}</td>
        </tr>
      `;
    });

    htmlContent += `
        </tbody>
      </table>
    `;

    Swal.fire({
      title: 'Detalles del Cronograma',
      html: htmlContent,
      showCloseButton: true,
      showConfirmButton: false
    });
  }
}
