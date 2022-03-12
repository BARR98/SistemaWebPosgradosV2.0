import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Maestria } from 'src/app/core/models/maestria/maestria';
@Component({
  selector: 'app-masters-list',
  templateUrl: './masters-list.component.html',
  styleUrls: ['./masters-list.component.css']
})
export class MastersListComponent implements OnInit {

  masters: any
  master: any
  isClicked: boolean = false
  form: FormGroup;


  ngOnInit() {
    this.getMasters()

  }


  constructor(
    public maestriasService: MaestriasService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }



  saveMaster() {

    event.preventDefault();
    const maestria = this.form.value;
    this.maestriasService.createMaestria(maestria)
      .subscribe((newMaestria) => {
        console.log(newMaestria);
      });
    this.router.navigate(['/admin/masters-list'])

  }


  private buildForm() {
    this.form = this.formBuilder.group({
      nombre_maestria: ['',
        [Validators.required,
        Validators.minLength(10)]],
      abreviatura_maestria: ['',
        [Validators.required,
        Validators.minLength(3)]],
      GPI_start: ['',
        [Validators.required,
        Validators.minLength(10)]],
      GPI_conocimientos_basicos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPI_conocimientos_habilidades: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPI_conocimientos_aptitudes_valores: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPE_start: ['',
        [Validators.required,
        Validators.minLength(5)]],
      GPE_capacidades: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPE_competencias: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required,
        Validators.minLength(5)])
      ]),
      GPE_conocimientos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPE_habilidades: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPE_aptitudes: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required,
        Validators.minLength(5)])
      ]),
      GPES_objetivo_general: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      GPES_objetivos_especificos: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required,
        Validators.minLength(5)])
      ]),
      GPES_star: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      GPES_metas: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPES_vision: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      GPESAB_datos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPESAO_datos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GLGAC: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      GPSA_start: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      GPSA_requisitos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GCT_start: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      GCT_requisitos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PARI_start: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      PARI_requisitos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PARI_documentacion_start: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      PARI_documentos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PARP_start: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      PARP_requisitos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PARE_start: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      PARE_requisitos: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required])
      ]),
      PARE_obtencion_grado_start: this.formBuilder.control('', [Validators.required]),
      PARE_obtencion_grado_requisitos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PAB_start: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      PAB_requisitos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PADescargas: this.formBuilder.array([
        this.formBuilder.group({
          'Descargas_nombre': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'Descargas_enlace': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
        })
      ]),
      NADocentes: this.formBuilder.array([
        this.formBuilder.group({
          'DNombre': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'DGrado_academico': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'DTiempo': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'DEspecialidad': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'DCurriculum': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)])
        })
      ]),
      Estudiante: this.formBuilder.array([
        this.formBuilder.group({
          'anio': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'ENombre': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'ETema_tesis': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'ETutor': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'EDirector_tesis': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)])
        })

      ]),
      VInformacion: this.formBuilder.control('',
        [Validators.required,
        Validators.minLength(5)]),
      VConvenios: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)]),
      ]),
      CTelefonos: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)]),
      ]),
      CRedes: this.formBuilder.array([
        this.formBuilder.group({
          'RNombre': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'RCuenta': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)])
        })
      ]),
      CDireccion: this.formBuilder.array([
        this.formBuilder.control('',
          [Validators.required,
          Validators.minLength(5)]),
      ]),
      NEInformacion: this.formBuilder.array([
        this.formBuilder.group({
          'NENombre': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)]),
          'NEEnlace': this.formBuilder.control('',
            [Validators.required,
            Validators.minLength(5)])
        })
      ])
    });



  }

  get GPI_conocimientos_basicos() {
    return this.form.get('GPI_conocimientos_basicos') as FormArray

  }

  get GPI_conocimientos_habilidades() {
    return this.form.get('GPI_conocimientos_habilidades') as FormArray

  }

  get GPI_conocimientos_aptitudes_valores() {
    return this.form.get('GPI_conocimientos_aptitudes_valores') as FormArray

  }


  get GPE_capacidades() {
    return this.form.get('GPE_capacidades') as FormArray

  }

  get GPE_competencias() {
    return this.form.get('GPE_competencias') as FormArray

  }

  get GPE_conocimientos() {
    return this.form.get('GPE_conocimientos') as FormArray
  }

  get GPE_habilidades() {
    return this.form.get('GPE_habilidades') as FormArray
  }

  get GPE_aptitudes() {
    return this.form.get('GPE_aptitudes') as FormArray
  }


  get GPES_objetivos_especificos() {
    return this.form.get('GPES_objetivos_especificos') as FormArray
  }

  get GPES_metas() {
    return this.form.get('GPES_metas') as FormArray
  }

  get GPESAB_datos() {
    return this.form.get('GPESAB_datos') as FormArray
  }

  get GPESAO_datos() {
    return this.form.get('GPESAO_datos') as FormArray
  }

  get GPSA_start() {
    return this.form.get('GPSA_start') as FormArray
  }

  get GPSA_requisitos() {
    return this.form.get('GPSA_requisitos') as FormArray
  }

  get GCT_requisitos() {
    return this.form.get('GCT_requisitos') as FormArray
  }

  get PARI_requisitos() {
    return this.form.get('PARI_requisitos') as FormArray
  }

  get PARI_documentos() {
    return this.form.get('PARI_documentos') as FormArray
  }

  get PARP_start() {
    return this.form.get('PARP_start') as FormArray
  }

  get PARP_requisitos() {
    return this.form.get('PARP_requisitos') as FormArray
  }


  get PARE_requisitos() {
    return this.form.get('PARE_requisitos') as FormArray
  }


  get PARE_obtencion_grado_requisitos() {
    return this.form.get('PARE_obtencion_grado_requisitos') as FormArray
  }

  get PAB_start() {
    return this.form.get('PAB_start') as FormArray
  }

  get PAB_requisitos() {
    return this.form.get('PAB_requisitos') as FormArray
  }

  get Docentes() {
    return this.form.get('Docentes') as FormArray
  }

  get NADocentes(): FormArray {
    return this.form.get('NADocentes') as FormArray
  }

  get PADescargas(): FormArray {
    return this.form.get('PADescargas') as FormArray
  }

  get EGeneracion(): FormArray {
    return this.form.get('EGeneracion') as FormArray
  }

  get Estudiante(): FormArray {
    return this.form.get('Estudiante') as FormArray
  }

  get VConvenios(): FormArray {
    return this.form.get('VConvenios') as FormArray
  }

  get CTelefonos(): FormArray {
    return this.form.get('CTelefonos') as FormArray
  }
  get CRedes(): FormArray {
    return this.form.get('CRedes') as FormArray
  }

  get CDireccion(): FormArray {
    return this.form.get('CDireccion') as FormArray
  }

  get NEInformacion(): FormArray {
    return this.form.get('NEInformacion') as FormArray
  }



  agregarConocimientoBasico() {
    this.GPI_conocimientos_basicos.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPIConocimientosBasicos(i: number) {
    this.GPI_conocimientos_basicos.removeAt(i)
  }

  agregarHabilidad() {
    this.GPI_conocimientos_habilidades.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteHabilidad(i: number) {
    this.GPI_conocimientos_basicos.removeAt(i)
  }

  agregarAptitudValor() {
    this.GPI_conocimientos_aptitudes_valores.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteAptitudValor(i: number) {
    this.GPI_conocimientos_aptitudes_valores.removeAt(i)
  }

  agregarGPECapacidad() {
    this.GPE_capacidades.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPECapacidades(i: number) {
    this.GPE_capacidades.removeAt(i)
  }

  agregarGPECompetencia() {
    this.GPE_competencias.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPECompetencias(i: number) {
    this.GPE_competencias.removeAt(i)
  }

  agregarGPEConocimiento() {
    this.GPE_conocimientos.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPEConocimientos(i: number) {
    this.GPE_conocimientos.removeAt(i)
  }

  agregarGPEHabilidad() {
    this.GPE_habilidades.push(this.formBuilder.control('', [Validators.required]))
  }



  deleteGPEHabilidades(i: number) {
    this.GPE_habilidades.removeAt(i)
  }

  agregarGPEAptitud() {
    this.GPE_aptitudes.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPEAptitudes(i: number) {
    this.GPE_aptitudes.removeAt(i)
  }

  agregarGPESObjetivoEspecificos() {
    this.GPES_objetivos_especificos.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPESObjetivoEspecificos(i: number) {
    this.GPES_objetivos_especificos.removeAt(i)
  }

  agregarGPESMeta() {
    this.GPES_metas.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPESMetas(i: number) {
    this.GPES_metas.removeAt(i)
  }

  agregarGPESAB_datos() {
    this.GPESAB_datos.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPESABDatos(i: number) {
    this.GPESAB_datos.removeAt(i)
  }

  agregarGPESAO_datos() {
    this.GPESAO_datos.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPESAODatos(i: number) {
    this.GPESAO_datos.removeAt(i)
  }

  agregarGPSA_requisitos() {
    this.GPSA_requisitos.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGPSA_requisitos(i: number) {
    this.GPSA_requisitos.removeAt(i)
  }

  agregarGCT_requisitos() {
    this.GCT_requisitos.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteGCT_requisitos(i: number) {
    this.GCT_requisitos.removeAt(i)
  }

  agregarPARI_requisitos() {
    this.PARI_requisitos.push(this.formBuilder.control('', [Validators.required]))
  }

  deletePARI_requisitos(i: number) {
    this.PARI_requisitos.removeAt(i)
  }

  agregarPARI_documentos() {
    this.PARI_documentos.push(this.formBuilder.control('', [Validators.required]))
  }

  deletePARI_documentos(i: number) {
    this.PARI_documentos.removeAt(i)
  }


  agregarPARP_requisitos() {
    this.PARP_start.push(this.formBuilder.control('', [Validators.required]))
  }


  deletePARP_requisitos(i: number) {
    this.PARP_start.removeAt(i)
  }

  agregarPARE_requisitos() {
    this.PARE_requisitos.push(this.formBuilder.control('', [Validators.required]))
  }

  deletePARE_requisitos(i: number) {
    this.PARE_requisitos.removeAt(i)
  }

  agregarPARE_obtencion_grado_requisitos() {
    this.PARE_obtencion_grado_requisitos.push(this.formBuilder.control('', [Validators.required]))
  }

  deletePARE_obtencion_grado_requisitos(i: number) {
    this.PARE_obtencion_grado_requisitos.removeAt(i)
  }


  agregarPAB_requisitos() {
    this.PAB_requisitos.push(this.formBuilder.control('', [Validators.required]))
  }


  deletePAB_requisitos(i: number) {
    this.PAB_requisitos.removeAt(i)
  }


  addNADocente() {
    let docentesArr = this.form.get('NADocentes') as FormArray;
    let newDocente = this.formBuilder.group({
      'DNombre': '',
      'DGrado_academico': '',
      'DTiempo': '',
      'DEspecialidad': '',
      'DCurriculum': ''
    })

    docentesArr.push(newDocente)
    console.log(docentesArr.getRawValue())

  }

  deleteNADocente(i: number) {
    this.NADocentes.removeAt(i)
  }

  addPADescargas() {
    let descargasArr = this.form.get('PADescargas') as FormArray;
    let newDescarga = this.formBuilder.group({
      'Descargas_nombre': this.formBuilder.control(''),
      'Descargas_enlace': this.formBuilder.control(''),
    })

    descargasArr.push(newDescarga)


  }

  deletePADescargas(i: number) {
    this.PADescargas.removeAt(i)
  }

  addEstudiante() {
    let estudiantesArr = this.form.get('Estudiante') as FormArray;
    let newEstudiante = this.formBuilder.group({
      'anio': this.formBuilder.control(''),
      'ENombre': this.formBuilder.control(''),
      'ETema_tesis': this.formBuilder.control(''),
      'ETutor': this.formBuilder.control(''),
      'EDirector_tesis': this.formBuilder.control('')
    })

    estudiantesArr.push(newEstudiante)


  }

  deleteEstudiante(i: number) {
    this.Estudiante.removeAt(i)
  }

  agregarVConvenios() {
    this.VConvenios.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteVConvenios(i: number) {
    this.VConvenios.removeAt(i)
  }


  agregarCTelefonos() {
    this.CTelefonos.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteCTelefonos(i: number) {
    this.CTelefonos.removeAt(i)
  }

  addCRedes() {
    let redesArr = this.form.get('CRedes') as FormArray;
    let newRed = this.formBuilder.group({
      'RNombre': this.formBuilder.control(''),
      'RCuenta': this.formBuilder.control('')
    })

    redesArr.push(newRed)
  }

  deleteCRedes(i: number) {
    this.CRedes.removeAt(i)
  }

  addCDireccion() {
    this.CDireccion.push(this.formBuilder.control('', [Validators.required]))
  }

  deleteCDireccion(i: number) {
    this.CDireccion.removeAt(i)
  }

  addNEInformacion() {
    let normasArr = this.form.get('NEInformacion') as FormArray;
    let newNorma = this.formBuilder.group({
      'NENombre': this.formBuilder.control(''),
      'NEEnlace': this.formBuilder.control('')
    })

    normasArr.push(newNorma)
  }

  deleteNEInformacion(i: number) {
    this.NEInformacion.removeAt(i)
  }

  formReset() {
    this.form.reset(this.form.value)
  }



  getMasters() {
    this.maestriasService.getAllMaestrias()
      .subscribe(masters => {
        this.masters = masters;
        console.log(masters)
      });
  }



  saveUpdatedMaster(_id: string) {
    const masterUpdated = this.form.value

    console.log("Called")
  }

  redirectToMasterEdit(_id : string) {
    this.router.navigate(['/admin/master-edit',[ _id] ])
  }

  getMaster(id: string) {
    this.maestriasService.getMaestria(id)
      .subscribe(master => {
        this.master = master;
      });
  }


  deleteMaster(_id: string) {
    console.log(_id)
    if (confirm("¿Desea eliminar esta maestría?")) {
      this.maestriasService.deleteMaestria(_id)
        .subscribe(rta => {
          this.getMasters();
        });
    }

  }

  redirectToMastersList() {
    this.router.navigate(['/admin/create'])
  }


}
