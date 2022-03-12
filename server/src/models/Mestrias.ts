import { Schema, model, Document, Mongoose } from 'mongoose'

const MaestriaSchema = new Schema({

    nombre_maestria: String,
    abreviatura_maestria: String,
    general: {
        GTramites: [],
        GFechas: [],
        GObjetivoGeneral: String,
        GObjetivosEspecificos: [],
        GMetas: [],
        GPerfil_ingreso: {
            GPI_start: String,
            GPI_conocimientos_basicos: [],
            GPI_conocimientos_habilidades: [],
            GPI_conocimientos_aptitudes_valores: [],
        },
        GPerfil_egreso: {
            GPE_start: String,
            GPE_capacidades: [],
            GPE_competencias: [],
            GPE_conocimientos: [],
            GPE_habiliades: [],
            GPE_aptitudes: []
        },
        GPlanesEstudio: {
            GPES_objetivo_general: String,
            GPES_objetivos_especificos: [],
            GPES_metas: {
                GPES_star: String,
                GPES_metas: [],
                GPES_mision: String,
                GPES_vision: String
            },
            GPES_asignaturas_basicas: {
                GPESAB_datos: []
            },
            GPES_asignaturas_optativas: {
                GPESAO_datos: []
            },
            GPES_seminario_tesis: []
        },
        GLGAC: String,
        GProceso_seleccion_aspirantes: {
            GPSA_requisitos: {
                GPSA_start: String,
                GPSA_requisitos: []

            }
        },
        GCaracteristicas_tesis: {
            GCT_start: String,
            GCT_requisitos: []

        },
    },
    procesos_administrativos: {
        PARequisitos_ingreso: {
            PARI_start: String,
            PARI_requisitos: [],
            PARI_documentacion_start: String,
            PARI_documentos: []

        },
        PARequisitos_permanencia: {
            PARP_start: String,
            PARP_requisitos: [],
        },
        PARequisitos_egreso: {
            PARE_start: String,
            PARE_requisitos: [],
            PARE_obtencion_grado_start: String,
            PARE_obtencion_grado_requisitos: []
        },
        PABecas: {
            PAB_start: String,
            PAB_requisitos: []
        },
        PADescargas: []

    },

    docentes: {
        NADocentes: [],
        NARepositorio_tesis: []
    }

    ,
    Estudiantes: {
        Estudiante: []
    },
    vinculacion: {
        VInformacion: String,
        VConvenios: []
    },
    contacto: {
        CTelefonos: [],
        CRedes: [],
        CDireccion: [],
        CCorreo: []
    },
    normas_estatutos: {
        NEInformacion: []


    }







});

export default model('Maestria',MaestriaSchema);

