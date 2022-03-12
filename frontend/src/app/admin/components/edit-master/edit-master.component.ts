import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, Form } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Maestria } from 'src/app/core/models/maestria/maestria';

@Component({
  selector: 'app-edit-master',
  templateUrl: './edit-master.component.html',
  styleUrls: ['./edit-master.component.css']
})
export class EditMasterComponent implements OnInit {

  master: any
  form: FormGroup;
  _id: string



  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this._id = this.activatedRoute.snapshot.paramMap.get('id')
      console.log(this._id)
      this.maestriasService.getMaestria(this._id)
        .subscribe(getedMaster => {
          this.master = getedMaster

        });
    });
  }


  constructor(
    private maestriasService: MaestriasService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
      nombre_maestria: ['Esta es información de ejemplo',
        [Validators.required,
        Validators.minLength(10)]],
      abreviatura_maestria: ['Esta es información de ejemplo',
        [Validators.required,
        Validators.minLength(3)]],
      GTramites: this.formBuilder.array([
        this.formBuilder.group({
          'GTNombre': this.formBuilder.control('Esta es información de ejemplo',),
          'GTCosto': this.formBuilder.control('Esta es información de ejemplo',),
        }),
      ]),
      GFechas: this.formBuilder.array([
        this.formBuilder.group({
          'GFNombreTramite': this.formBuilder.control('Esta es información de ejemplo',),
          'GFTramiteFecha': this.formBuilder.control('Esta es información de ejemplo',),
        }),
      ]),
      GObjetivoGeneral: ['Esta es información de ejemplo',
        [Validators.required,
        Validators.minLength(10)]],
      GObjetivosEspecificos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(10)])
      ]),
      GMetas: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(10)])
      ]),
      GPI_start: ['Esta es información de ejemplo',
        [Validators.required,
        Validators.minLength(10)]],
      GPI_conocimientos_basicos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPI_conocimientos_habilidades: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPI_conocimientos_aptitudes_valores: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPE_start: ['Esta es información de ejemplo'],
      GPE_capacidades: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPE_competencias: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo', [Validators.required,
        Validators.minLength(5)])
      ]),
      GPE_conocimientos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPE_habilidades: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPE_aptitudes: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo', [Validators.required,
        Validators.minLength(5)])
      ]),
      GPES_objetivo_general: this.formBuilder.control('Esta es información de ejemplo'),
      GPES_objetivos_especificos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo', [Validators.required,
        Validators.minLength(5)])
      ]),
      GPES_star: this.formBuilder.control('Esta es información de ejemplo'),
      GPES_metas: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GPES_vision: this.formBuilder.control('Esta es información de ejemplo'),
      GPESAB_datos: this.formBuilder.array([
        this.formBuilder.group({
          'clave_materia': this.formBuilder.control('Esta es información de ejemplo',),
          'nombre_materia': this.formBuilder.control('Esta es información de ejemplo',),
          'enlace_temario_materia': this.formBuilder.control('Esta es información de ejemplo',)
        }),
      ]),
      GPESAO_datos: this.formBuilder.array([
        this.formBuilder.group({
          'clave_materia': this.formBuilder.control('Esta es información de ejemplo',),
          'nombre_materia': this.formBuilder.control('Esta es información de ejemplo',),
          'enlace_temario_materia': this.formBuilder.control('Esta es información de ejemplo',)
        }),
      ]),
      GPES_seminario_tesis: this.formBuilder.array([
        this.formBuilder.group({
          'clave_materia': this.formBuilder.control('Esta es información de ejemplo',),
          'nombre_materia': this.formBuilder.control('Esta es información de ejemplo',),
          'enlace_temario_materia': this.formBuilder.control('Esta es información de ejemplo',)
        }),
      ]),
      GLGAC: this.formBuilder.control('Esta es información de ejemplo'),
      GPSA_start: this.formBuilder.control('Esta es información de ejemplo'),
      GPSA_requisitos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      GCT_start: this.formBuilder.control('Esta es información de ejemplo'),
      GCT_requisitos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PARI_start: this.formBuilder.control('Esta es información de ejemplo'),
      PARI_requisitos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PARI_documentacion_start: this.formBuilder.control('Esta es información de ejemplo'),
      PARI_documentos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PARP_start: this.formBuilder.control('Esta es información de ejemplo'),
      PARP_requisitos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PARE_start: this.formBuilder.control('Esta es información de ejemplo'),
      PARE_requisitos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo', [Validators.required])
      ]),
      PARE_obtencion_grado_start: this.formBuilder.control('Esta es información de ejemplo', [Validators.required]),
      PARE_obtencion_grado_requisitos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PAB_start: this.formBuilder.control('Esta es información de ejemplo'),
      PAB_requisitos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)])
      ]),
      PADescargas: this.formBuilder.array([
        this.formBuilder.group({
          'Descargas_nombre': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'Descargas_enlace': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
        })
      ]),
      NADocentes: this.formBuilder.array([
        this.formBuilder.group({
          'DNombre': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DGrado_academico': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DTiempo': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DEspecialidad': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DCurriculum': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)])
        })
      ]),
      NARepositorio_tesis: this.formBuilder.array([
        this.formBuilder.group({
          'DTitulo': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DTipo': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DAutores': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DFecha': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DResumen': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'DEnlace': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)])
        })
      ]),
      Estudiante: this.formBuilder.array([
        this.formBuilder.group({
          'generacion': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(1)]),
          'ENombre': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'ETema_tesis': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'ETutor': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'EDirector_tesis': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)])
        })

      ]),
      VInformacion: this.formBuilder.control('Esta es información de ejemplo'),
      VConvenios: this.formBuilder.array([
        this.formBuilder.group({
          'convenio_nombre': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(10)]),
          'convenio_enlace': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(10)])

        })
      ]),
      CTelefonos: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)]),
      ]),
      CRedes: this.formBuilder.array([
        this.formBuilder.group({
          'RNombre': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'RCuenta': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)])
        })
      ]),
      CDireccion: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)]),
      ]),
      CCorreo: this.formBuilder.array([
        this.formBuilder.control('Esta es información de ejemplo',
          [Validators.required,
          Validators.minLength(5)]),
      ]),
      NEInformacion: this.formBuilder.array([
        this.formBuilder.group({
          'NENombre': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)]),
          'NEEnlace': this.formBuilder.control('Esta es información de ejemplo',
            [Validators.required,
            Validators.minLength(5)])
        })
      ])

    });



  }

  get GTramites() {
    return this.form.get('GTramites') as FormArray
  }

  get GFechas() {
    return this.form.get('GFechas') as FormArray
  }

  get GMetas() {
    return this.form.get('GMetas') as FormArray
  }

  get GObjetivosEspecificos() {
    return this.form.get('GObjetivosEspecificos') as FormArray

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

  get GPES_seminario_tesis() {
    return this.form.get('GPES_seminario_tesis') as FormArray
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

  get NARepositorio_tesis(): FormArray {
    return this.form.get('NARepositorio_tesis') as FormArray
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

  get CCorreo(): FormArray {
    return this.form.get('CCorreo') as FormArray
  }


  get NEInformacion(): FormArray {
    return this.form.get('NEInformacion') as FormArray
  }




  addGTramite() {
    let tramitesArr = this.form.get('GTramites') as FormArray;
    let newTramite = this.formBuilder.group({
      'GTNombre': this.formBuilder.control('Esta es información de ejemplo',),
      'GTCosto': this.formBuilder.control('Esta es información de ejemplo',),
    })

    tramitesArr.push(newTramite)


  }

  deleteGTramite(i: number) {
    this.GTramites.removeAt(i)
  }

  addGFechas() {
    let fechasArr = this.form.get('GFechas') as FormArray;
    let newFecha = this.formBuilder.group({
      'GFNombreTramite': this.formBuilder.control('Esta es información de ejemplo',),
      'GFTramiteFecha': this.formBuilder.control('Esta es información de ejemplo',),
    })

    fechasArr.push(newFecha)


  }

  deleteGFechas(i: number) {
    this.GFechas.removeAt(i)
  }



  agregarGObjetivosEspecificos() {
    this.GObjetivosEspecificos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGObjetivosEspecificos(i: number) {
    this.GObjetivosEspecificos.removeAt(i)
  }

  agregarGMetas() {
    this.GMetas.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGMetas(i: number) {
    this.GMetas.removeAt(i)
  }

  agregarConocimientoBasico() {
    this.GPI_conocimientos_basicos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGPIConocimientosBasicos(i: number) {
    this.GPI_conocimientos_basicos.removeAt(i)
  }

  agregarHabilidad() {
    this.GPI_conocimientos_habilidades.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteHabilidad(i: number) {
    this.GPI_conocimientos_basicos.removeAt(i)
  }

  agregarAptitudValor() {
    this.GPI_conocimientos_aptitudes_valores.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteAptitudValor(i: number) {
    this.GPI_conocimientos_aptitudes_valores.removeAt(i)
  }

  agregarGPECapacidad() {
    this.GPE_capacidades.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGPECapacidades(i: number) {
    this.GPE_capacidades.removeAt(i)
  }

  agregarGPECompetencia() {
    this.GPE_competencias.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGPECompetencias(i: number) {
    this.GPE_competencias.removeAt(i)
  }

  agregarGPEConocimiento() {
    this.GPE_conocimientos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGPEConocimientos(i: number) {
    this.GPE_conocimientos.removeAt(i)
  }

  agregarGPEHabilidad() {
    this.GPE_habilidades.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }



  deleteGPEHabilidades(i: number) {
    this.GPE_habilidades.removeAt(i)
  }

  agregarGPEAptitud() {
    this.GPE_aptitudes.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGPEAptitudes(i: number) {
    this.GPE_aptitudes.removeAt(i)
  }

  agregarGPESObjetivoEspecificos() {
    this.GPES_objetivos_especificos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGPESObjetivoEspecificos(i: number) {
    this.GPES_objetivos_especificos.removeAt(i)
  }

  agregarGPESMeta() {
    this.GPES_metas.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGPESMetas(i: number) {
    this.GPES_metas.removeAt(i)
  }

  agregarGPESAB_datos() {
    let asignaturasArr = this.form.get('GPESAB_datos') as FormArray;
    let newAsignatura = this.formBuilder.group({
      'clave_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)]),
      'nombre_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)]),
      'enlace_temario_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)])
    })

    asignaturasArr.push(newAsignatura)


  }

  deleteGPESABDatos(i: number) {
    this.GPESAB_datos.removeAt(i)
  }

  agregarGPESAO_datos() {
    let asignaturasArr = this.form.get('GPESAO_datos') as FormArray;
    let newAsignatura = this.formBuilder.group({
      'clave_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)]),
      'nombre_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)]),
      'enlace_temario_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)])
    })

    asignaturasArr.push(newAsignatura)
  }

  deleteGPESAODatos(i: number) {
    this.GPESAO_datos.removeAt(i)
  }

  agregarGPES_seminario_tesis() {
    let asignaturasArr = this.form.get('GPES_seminario_tesis') as FormArray;
    let newAsignatura = this.formBuilder.group({
      'clave_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)]),
      'nombre_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)]),
      'enlace_temario_materia': this.formBuilder.control('Esta es información de ejemplo', [
        Validators.required,
        Validators.minLength(5)])
    })

    asignaturasArr.push(newAsignatura)
  }

  deleteGPES_seminario_tesis(i: number) {
    this.GPES_seminario_tesis.removeAt(i)
  }


  agregarGPSA_requisitos() {
    this.GPSA_requisitos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGPSA_requisitos(i: number) {
    this.GPSA_requisitos.removeAt(i)
  }

  agregarGCT_requisitos() {
    this.GCT_requisitos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteGCT_requisitos(i: number) {
    this.GCT_requisitos.removeAt(i)
  }

  agregarPARI_requisitos() {
    this.PARI_requisitos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deletePARI_requisitos(i: number) {
    this.PARI_requisitos.removeAt(i)
  }

  agregarPARI_documentos() {
    this.PARI_documentos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deletePARI_documentos(i: number) {
    this.PARI_documentos.removeAt(i)
  }


  agregarPARP_requisitos() {
    this.PARP_requisitos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }


  deletePARP_requisitos(i: number) {
    this.PARP_requisitos.removeAt(i)
  }

  agregarPARE_requisitos() {
    this.PARE_requisitos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deletePARE_requisitos(i: number) {
    this.PARE_requisitos.removeAt(i)
  }

  agregarPARE_obtencion_grado_requisitos() {
    this.PARE_obtencion_grado_requisitos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deletePARE_obtencion_grado_requisitos(i: number) {
    this.PARE_obtencion_grado_requisitos.removeAt(i)
  }


  agregarPAB_requisitos() {
    this.PAB_requisitos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }


  deletePAB_requisitos(i: number) {
    this.PAB_requisitos.removeAt(i)
  }


  addNADocente() {
    let docentesArr = this.form.get('NADocentes') as FormArray;
    let newDocente = this.formBuilder.group({
      'DNombre': 'Esta es información de ejemplo',
      'DGrado_academico': 'Esta es información de ejemplo',
      'DTiempo': 'Esta es información de ejemplo',
      'DEspecialidad': 'Esta es información de ejemplo',
      'DCurriculum': 'Esta es información de ejemplo'
    })

    docentesArr.push(newDocente)
    console.log(docentesArr.getRawValue())

  }

  deleteNADocente(i: number) {
    this.NADocentes.removeAt(i)
  }

  addNARepositorio_tesis() {
    let documentosArr = this.form.get('NARepositorio_tesis') as FormArray;
    let newDocumento = this.formBuilder.group({
      'DTitulo': this.formBuilder.control('Esta es información de ejemplo'),
      'DTipo': this.formBuilder.control('Esta es información de ejemplo'),
      'DAutores': this.formBuilder.control('Esta es información de ejemplo'),
      'DFecha': this.formBuilder.control('Esta es información de ejemplo'),
      'DResumen': this.formBuilder.control('Esta es información de ejemplo'),
      'DEnlace': this.formBuilder.control('Esta es información de ejemplo')
    })

    documentosArr.push(newDocumento)


  }

  deleteNARepositorio_tesis(i: number) {
    this.NARepositorio_tesis.removeAt(i)
  }

  addPADescargas() {
    let descargasArr = this.form.get('PADescargas') as FormArray;
    let newDescarga = this.formBuilder.group({
      'Descargas_nombre': this.formBuilder.control('Esta es información de ejemplo'),
      'Descargas_enlace': this.formBuilder.control('Esta es información de ejemplo'),
    })

    descargasArr.push(newDescarga)


  }

  deletePADescargas(i: number) {
    this.PADescargas.removeAt(i)
  }

  addEstudiante() {
    let estudiantesArr = this.form.get('Estudiante') as FormArray;
    let newEstudiante = this.formBuilder.group({
      'generacion': this.formBuilder.control('Esta es información de ejemplo',
        [Validators.required,
        Validators.minLength(1)]),
      'ENombre': this.formBuilder.control('Esta es información de ejemplo'),
      'ETema_tesis': this.formBuilder.control('Esta es información de ejemplo'),
      'ETutor': this.formBuilder.control('Esta es información de ejemplo'),
      'EDirector_tesis': this.formBuilder.control('Esta es información de ejemplo')
    })

    estudiantesArr.push(newEstudiante)


  }

  deleteEstudiante(i: number) {
    this.Estudiante.removeAt(i)
  }

  agregarVConvenios() {
    let conveniosArr = this.form.get('VConvenios') as FormArray;
    let newConvenio = this.formBuilder.group({
      'convenio_nombre': this.formBuilder.control('Esta es información de ejemplo',
        [Validators.required,
        Validators.minLength(10)]),
      'convenio_enlace': this.formBuilder.control('Esta es información de ejemplo',
        [Validators.required,
        Validators.minLength(10)])

    })

    conveniosArr.push(newConvenio)
  }

  deleteVConvenios(i: number) {
    this.VConvenios.removeAt(i)
  }


  agregarCTelefonos() {
    this.CTelefonos.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteCTelefonos(i: number) {
    this.CTelefonos.removeAt(i)
  }

  addCRedes() {
    let redesArr = this.form.get('CRedes') as FormArray;
    let newRed = this.formBuilder.group({
      'RNombre': this.formBuilder.control('Esta es información de ejemplo'),
      'RCuenta': this.formBuilder.control('Esta es información de ejemplo')
    })

    redesArr.push(newRed)
  }

  deleteCRedes(i: number) {
    this.CRedes.removeAt(i)
  }

  addCDireccion() {
    this.CDireccion.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteCDireccion(i: number) {
    this.CDireccion.removeAt(i)
  }

  addCCorreo() {
    this.CCorreo.push(this.formBuilder.control('Esta es información de ejemplo', [Validators.required]))
  }

  deleteCCorreo(i: number) {
    this.CCorreo.removeAt(i)
  }

  addNEInformacion() {
    let normasArr = this.form.get('NEInformacion') as FormArray;
    let newNorma = this.formBuilder.group({
      'NENombre': this.formBuilder.control('Esta es información de ejemplo'),
      'NEEnlace': this.formBuilder.control('Esta es información de ejemplo')
    })

    normasArr.push(newNorma)
  }

  deleteNEInformacion(i: number) {
    this.NEInformacion.removeAt(i)
  }

  formReset() {
    this.form.reset(this.form.value)
  }

  redirectToMastersList() {
    this.router.navigate(['/admin/masters-list'])
  }







  saveMasterUpdated() {
    if (this.form.valid) {
      const masterUpdated = this.form.value;
      this.maestriasService.updateMaestria(this._id, masterUpdated)
        .subscribe((newMaster) => {
          console.log(newMaster);
          this.router.navigate(['./admin/masters-list']);
        });
    }
  }
}







