import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicSharedModule } from './public-shared/public-shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SelectMasterComponent } from './components/select-master/select-master.component';
import { GeneralPerfilesComponent } from './components/general/general-perfiles/general-perfiles.component';
import { GeneralPlanesEstudioComponent } from './components/general/general-planes-estudio/general-planes-estudio.component';
import { GeneralObjetivosMetasComponent } from './components/general/general-objetivos-metas/general-objetivos-metas.component';
import { RequisitosIngresoComponent } from './components/procesos-administrativos/requisitos-ingreso/requisitos-ingreso.component';
import { RequisitosPermanenciaComponent } from './components/procesos-administrativos/requisitos-permanencia/requisitos-permanencia.component';
import { RequisitosEgresoComponent } from './components/procesos-administrativos/requisitos-egreso/requisitos-egreso.component';
import { DocentesComponent } from './components/nucleo-academico/docentes/docentes.component';
import { CurriculumDetailComponent } from './components/nucleo-academico/curriculum-detail/curriculum-detail.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { VinculacionComponent } from './components/vinculacion/vinculacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NormasEstatutosComponent } from './components/normas-estatutos/normas-estatutos.component';
import { LgacComponent } from './components/general/lgac/lgac.component';
import { SeleccionAspirantesComponent } from './components/general/seleccion-aspirantes/seleccion-aspirantes.component';
import { CaracteristicasTesisComponent } from './components/general/caracteristicas-tesis/caracteristicas-tesis.component';
import { BecasComponent } from './components/procesos-administrativos/becas/becas.component';
import { DescargasComponent } from './components/procesos-administrativos/descargas/descargas.component';
import { GeneracionDetailComponent } from './components/estudiantes/generacion-detail/generacion-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RepositorioTesisComponent } from './components/repositorio-tesis/repositorio-tesis.component';
@NgModule({
  declarations: [PublicLayoutComponent, HomeComponent, SelectMasterComponent, GeneralPerfilesComponent, GeneralPlanesEstudioComponent, GeneralObjetivosMetasComponent, RequisitosIngresoComponent, RequisitosPermanenciaComponent, RequisitosEgresoComponent, DocentesComponent, CurriculumDetailComponent, EstudiantesComponent, VinculacionComponent, ContactoComponent, NormasEstatutosComponent, LgacComponent, SeleccionAspirantesComponent, CaracteristicasTesisComponent, BecasComponent,
  DescargasComponent,
  GeneracionDetailComponent,
  LoginComponent,
  RepositorioTesisComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicSharedModule,
    MaterialModule,
    RouterModule
  ]
})
export class PublicModule { }
