import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentaServicesService } from 'src/app/services/cuenta-services.service';
import { State_user } from 'src/app/state/State_user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-transaccion',
  templateUrl: './crear-transaccion.component.html',
  styleUrls: ['./crear-transaccion.component.css']
})
export class depositoRetirocomponent implements OnInit {
  titulo: string | undefined;
  transaccion: number | undefined;
  monto: number | undefined; 
  bancoSeleccionado: string | undefined;
  bancoError: boolean = false;
  mensajeModal: string = '';

  bancos = [
    { nombre: 'Davivienda', imagen: '/assets/davivienda.png' },
    { nombre: 'BBVA', imagen: '/assets/bbva.png' },
    { nombre: 'Banco de Bogotá', imagen: '/assets/banco-bogota.png' },
    { nombre: 'Banco Popular', imagen: '/assets/banco-popular.png' },
    { nombre: 'Banco de Occidente', imagen: '/assets/banco-occidente.png' }
  ];

  constructor(
    public cuentaService: CuentaServicesService,
    public state: State_user,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.transaccion = Number(this.route.snapshot.paramMap.get('transaccion'));

    switch (this.transaccion) {
      case 1:
        this.titulo = 'Déposito desde sucursal fisica';
        break;
      case 2:
        this.titulo = 'Déposito desde WEB';
        break;
      case 3:
        this.titulo = 'Déposito desde otras cuentas';
        break;
      case 4:
        this.titulo = 'Déposito desde cajero';
        break;
      case 5:
        this.titulo = 'Retiro de dinero';
        break;
      default:
        this.titulo = 'Transacción desconocida';
    }
  }

  getBancoImagen(nombreBanco: string): string | undefined {
    const banco = this.bancos.find(b => b.nombre === nombreBanco);
    return banco ? banco.imagen : undefined;
  }

 
  confirmarTransaccion(): void {
    if (this.monto !== undefined && this.monto > 0) {
      console.log('Monto ingresado:', this.monto);


    if (this.transaccion === 3 && (!this.bancoSeleccionado || this.bancoSeleccionado === '')) {
      this.bancoError = true; 
      return;
    } else {
      this.bancoError = false; 
    }

      switch (this.transaccion) {
        case 1:
          this.DepositoSucursal();
          break;
        case 2:
          this.DepositoWeb();
          break;
        case 3:
          this.DepositodesdeOtrasCuentas();
          break;
        case 4:
          this.DepositodesdeCajero();
          break;
        case 5:
          this.Retiro();
          break;
        default:
          console.log('Transacción desconocida');
      }
    } else {
      alert('Por favor, ingrese un monto válido.');
    }
  }

  DepositoSucursal(): void {
    this.cuentaService.postDepositoSucursal({ idCuenta: 3, monto: this.monto! }).subscribe(
      (data: any) => {
        this.state.respuestaTRansaccion = data;
  
        if (data && data.respuesta) {
          Swal.fire({
            icon: 'success',
            title: 'Transacción exitosa',
            text: `${data.respuesta}, su saldo actual es de: ${data.saldo}`,
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/operaciones']);
          });
        } else {
          console.error('La respuesta no contiene la propiedad "respuesta".');
          Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
            text: 'Ocurrió un error inesperado. Verifica la respuesta del servidor.',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      (error) => {
        console.error('Error al realizar el depósito:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al realizar el depósito.',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  DepositoWeb(): void {
    this.cuentaService.postDepositoWeb({ idCuenta: 3, monto: this.monto! }).subscribe(
      (data: any) => {
        console.log('Respuesta del servidor:', data); 
        this.state.respuestaTRansaccion = data; 
  
        if (data && data.respuesta) {
          Swal.fire({
            icon: 'success',
            title: 'Transacción exitosa',
            text: `${data.respuesta}, su saldo actual es de: ${data.saldo}`,
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/operaciones']);
          });
        } else {
          console.error('La respuesta no contiene la propiedad "respuesta".');
          Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
            text: 'Ocurrió un error inesperado. Verifica la respuesta del servidor.',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      (error) => {
        console.error('Error al realizar el depósito:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al realizar el depósito.',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  DepositodesdeOtrasCuentas(): void {
    this.cuentaService.postDepositoOtrasCuentas({ idCuenta: 3, monto: this.monto! }).subscribe(
      (data: any) => {
        console.log('Respuesta del servidor:', data); 
        this.state.respuestaTRansaccion = data; 
  
        if (data && data.respuesta) {
          Swal.fire({
            icon: 'success',
            title: 'Transacción exitosa',
            text: `${data.respuesta}, su saldo actual es de: ${data.saldo}`,
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/operaciones']);
          });
        } else {
          console.error('La respuesta no contiene la propiedad "respuesta".');
          Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
            text: 'Ocurrió un error inesperado. Verifica la respuesta del servidor.',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      (error) => {
        console.error('Error al realizar el depósito:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al realizar el depósito.',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  
  DepositodesdeCajero(): void {
    this.cuentaService.postDepositoCajero({ idCuenta: 3, monto: this.monto! }).subscribe(
      (data: any) => {
        console.log('Respuesta del servidor:', data); 
        this.state.respuestaTRansaccion = data; 
  
        if (data && data.respuesta) {
          Swal.fire({
            icon: 'success',
            title: 'Transacción exitosa',
            text: `${data.respuesta}, su saldo actual es de: ${data.saldo}`,
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/operaciones']);
          });
        } else {
          console.error('La respuesta no contiene la propiedad "respuesta".');
          Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
            text: 'Ocurrió un error inesperado. Verifica la respuesta del servidor.',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      (error) => {
        console.error('Error al realizar el depósito:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al realizar el depósito.',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  Retiro(): void {
    this.cuentaService.postRetiroCajero({ idCuenta: 3, monto: this.monto! }).subscribe(
      (data: any) => {
        console.log('Respuesta del servidor:', data); 
        this.state.respuestaTRansaccion = data; 
  
        if (data && data.respuesta) {
          Swal.fire({
            icon: 'success',
            title: 'Transacción exitosa',
            text: `${data.respuesta}, su saldo actual es de: ${data.saldo}`,
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/operaciones']);
          });
        } else {
          console.error('La respuesta no contiene la propiedad "respuesta".');
          Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
            text: 'Ocurrió un error inesperado. Verifica la respuesta del servidor.',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      (error) => {
        console.error('Error al realizar el depósito:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al realizar el depósito.',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }
}

