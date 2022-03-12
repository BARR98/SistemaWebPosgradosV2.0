import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralObjetivosMetasComponent } from './components/general/general-objetivos-metas/general-objetivos-metas.component';
import { GeneralPerfilesComponent } from './components/general/general-perfiles/general-perfiles.component';
import { GeneralPlanesEstudioComponent } from './components/general/general-planes-estudio/general-planes-estudio.component';
import { HomeComponent } from './components/home/home.component';
import { DocentesComponent } from './components/nucleo-academico/docentes/docentes.component';
import { RequisitosEgresoComponent } from './components/procesos-administrativos/requisitos-egreso/requisitos-egreso.component';
import { RequisitosIngresoComponent } from './components/procesos-administrativos/requisitos-ingreso/requisitos-ingreso.component';
import { RequisitosPermanenciaComponent } from './components/procesos-administrativos/requisitos-permanencia/requisitos-permanencia.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { SelectMasterComponent } from './components/select-master/select-master.component';
import {CurriculumDetailComponent} from './components/nucleo-academico/curriculum-detail/curriculum-detail.component'
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

const routes: Routes = [

  {
    path:'general-perfiles',
    component: GeneralPerfilesComponent
  },
  {
    path:'general-planes-estudio',
    component: GeneralPlanesEstudioComponent
  },
  {
    path:'general-objetivos-metas',
    component: GeneralObjetivosMetasComponent
  },
  {
    path:'procesos-administrativos-requisitos-ingreso',
    component: RequisitosIngresoComponent
  },
  {
    path:'procesos-administrativos-requisitos-permanencia',
    component: RequisitosPermanenciaComponent
  },
  {
    path:'procesos-administrativos-requisitos-egreso',
    component: RequisitosEgresoComponent
  },
  {
    path:'nucleo-academico',
    component: DocentesComponent
  },
  {
    path:'nucleo-academico/curriculum-detail/:id/:DNombre',
    component: CurriculumDetailComponent
  },
  {
    path:'estudiantes',
    component: EstudiantesComponent
  },
  {
    path:'estudiantes/generacion-detail/:id/:generacion',
    component: GeneracionDetailComponent
  },
  {
    path:'vinculacion',
    component: VinculacionComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'normas-estatutos',
    component: NormasEstatutosComponent
  },
  {
    path:'lgac',
    component: LgacComponent
  },
  {
    path:'seleccion-aspirantes',
    component: SeleccionAspirantesComponent
  },
  {
    path:'caracteristicas-tesis',
    component: CaracteristicasTesisComponent
  },
  {
    path:'procesos-administrativos-becas',
    component: BecasComponent
  },
  {
    path:'procesos-administrativos-descargas',
    component: DescargasComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent 
  },
  {
    path:'repositorio-tesis',
    component: RepositorioTesisComponent 
  },
  {
    path:'',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
