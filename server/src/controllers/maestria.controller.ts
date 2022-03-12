import { request, Request, Response } from 'express'


// Models
import Maestria from '../models/Mestrias';

export async function getMasters(req: Request, res: Response): Promise<Response> {
    const photos = await Maestria.find();
    return res.json(photos);
};



export async function createMaster(req: Request, res: Response): Promise<Response> {
    const newMaester = new Maestria({
        nombre_maestria: req.body.nombre_maestria,
        abreviatura_maestria: req.body.abreviatura_maestria,
        general: {
            GTramites: req.body.GTramites,
            GFechas: req.body.GFechas,
            GObjetivoGeneral: req.body.GObjetivoGeneral,
            GObjetivosEspecificos: req.body.GObjetivosEspecificos,
            GMetas: req.body.GMetas,
            GPerfil_ingreso: {
                GPI_start: req.body.GPI_start,
                GPI_conocimientos_basicos: req.body.GPI_conocimientos_basicos,
                GPI_conocimientos_habilidades: req.body.GPI_conocimientos_habilidades,
                GPI_conocimientos_aptitudes_valores: req.body.GPI_conocimientos_aptitudes_valores,
            },
            GPerfil_egreso: {
                GPE_start: req.body.GPE_start,
                GPE_capacidades: req.body.GPE_capacidades,
                GPE_competencias: req.body.GPE_competencias,
                GPE_conocimientos: req.body.GPE_conocimientos,
                GPE_habiliades: req.body.GPE_habiliades,
                GPE_aptitudes: req.body.GPE_aptitudes
            },
            GPlanesEstudio: {
                GPES_objetivo_general: req.body.GPES_objetivo_general,
                GPES_objetivos_especificos: req.body.GPES_objetivos_especificos,
                GPES_metas: {
                    GPES_star: req.body.GPES_star,
                    GPES_metas: req.body.GPES_metas,
                    GPES_mision: req.body.GPES_mision,
                    GPES_vision: req.body.GPES_vision
                },
                GPES_asignaturas_basicas: {
                    GPESAB_datos: req.body.GPESAB_datos
                },
                GPES_asignaturas_optativas: {
                    GPESAOdatos: req.body.GPESAOdatos
                },
                GPES_seminario_tesis: req.body.GPES_seminario_tesis
            },
            GLGAC: req.body.GLGAC,
            GProceso_seleccion_aspirantes: {
                GPSA_requisitos: {
                    GPSA_start: req.body.GPSA_start,
                    GPSA_requisitos: req.body.GPSA_requisitos

                }
            },
            GCaracteristicas_tesis: {
                GCT_start: req.body.GCT_start,
                GCT_requisitos: req.body.GCT_requisitos

            },
        },
        procesos_administrativos: {
            PARequisitos_ingreso: {
                PARI_start: req.body.PARI_start,
                PARI_requisitos: req.body.PARI_requisitos,
                PARI_documentacion_start: req.body.PARI_documentacion_start,
                PARI_documentos: req.body.PARI_documentos

            },
            PARequisitos_permanencia: {
                PARP_start: req.body.PARP_start,
                PARP_requisitos: req.body.PARP_requisitos,
            },
            PARequisitos_egreso: {
                PARE_start: req.body.PARE_start,
                PARE_requisitos: req.body.PARE_requisitos,
                PARE_obtencion_grado_start: req.body.PARE_obtencion_grado_start,
                PARE_obtencion_grado_requisitos: req.body.PARE_obtencion_grado_requisitos
            },
            PABecas: {
                PAB_start: req.body.PAB_start,
                PAB_requisitos: req.body.PAB_requisitos
            },
            PADescargas: req.body.PADescargas

        },
        docentes: {
            NADocentes: req.body.NADocentes,
            NARepositorio_tesis: req.body.NARepositorio_tesis
        }

        ,
        Estudiantes: {

            Estudiante: req.body.Estudiante

        },
        vinculacion: {
            VInformacion: req.body.VInformacion,
            VConvenios: req.body.VConvenios
        },
        contacto: {
            CTelefonos: req.body.CTelefonos,
            CRedes: req.body.CRedes,
            CDireccion: req.body.CDireccion,
            CCorreo: req.body.CCorreo
        },
        normas_estatutos: {
            NEInformacion: req.body.NEInformacion


        }

    });
    await newMaester.save();
    return res.json({
        message: 'Maestria Saved Successfully',
        newMaester
    });
};

export async function getMaster(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const master = await Maestria.findById(id);
    return res.json(master);
}

export async function deleteMaster(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await Maestria.findByIdAndRemove(id);
    return res.json({ message: 'Maestria Deleted' });
};

export async function updateMaster(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const maestria = {
        nombre_maestria: req.body.nombre_maestria,
        abreviatura_maestria: req.body.abreviatura_maestria,
        general: {
            GTramites: req.body.GTramites,
            GFechas: req.body.GFechas,
            GObjetivoGeneral: req.body.GObjetivoGeneral,
            GObjetivosEspecificos: req.body.GObjetivosEspecificos,
            GMetas: req.body.GMetas,
            GPerfil_ingreso: {
                GPI_start: req.body.GPI_start,
                GPI_conocimientos_basicos: req.body.GPI_conocimientos_basicos,
                GPI_conocimientos_habilidades: req.body.GPI_conocimientos_habilidades,
                GPI_conocimientos_aptitudes_valores: req.body.GPI_conocimientos_aptitudes_valores,
            },
            GPerfil_egreso: {
                GPE_start: req.body.GPE_start,
                GPE_capacidades: req.body.GPE_capacidades,
                GPE_competencias: req.body.GPE_competencias,
                GPE_conocimientos: req.body.GPE_conocimientos,
                GPE_habiliades: req.body.GPE_habiliades,
                GPE_aptitudes: req.body.GPE_aptitudes
            },
            GPlanesEstudio: {
                GPES_objetivo_general: req.body.GPES_objetivo_general,
                GPES_objetivos_especificos: req.body.GPES_objetivos_especificos,
                GPES_metas: {
                    GPES_star: req.body.GPES_star,
                    GPES_metas: req.body.GPES_metas,
                    GPES_mision: req.body.GPES_mision,
                    GPES_vision: req.body.GPES_vision
                },
                GPES_asignaturas_basicas: {
                    GPESAB_datos: req.body.GPESAB_datos
                },
                GPES_asignaturas_optativas: {
                    GPESAOdatos: req.body.GPESAOdatos
                },
                GPES_seminario_tesis: req.body.GPES_seminario_tesis
            },
            GLGAC: req.body.GLGAC,
            GProceso_seleccion_aspirantes: {
                GPSA_requisitos: {
                    GPSA_start: req.body.GPSA_start,
                    GPSA_requisitos: req.body.GPSA_requisitos

                }
            },
            GCaracteristicas_tesis: {
                GCT_start: req.body.GCT_start,
                GCT_requisitos: req.body.GCT_requisitos

            },
        },
        procesos_administrativos: {
            PARequisitos_ingreso: {
                PARI_start: req.body.PARI_start,
                PARI_requisitos: req.body.PARI_requisitos,
                PARI_documentacion_start: req.body.PARI_documentacion_start,
                PARI_documentos: req.body.PARI_documentos

            },
            PARequisitos_permanencia: {
                PARP_start: req.body.PARP_start,
                PARP_requisitos: req.body.PARP_requisitos,
            },
            PARequisitos_egreso: {
                PARE_start: req.body.PARE_start,
                PARE_requisitos: req.body.PARE_requisitos,
                PARE_obtencion_grado_start: req.body.PARE_obtencion_grado_start,
                PARE_obtencion_grado_requisitos: req.body.PARE_obtencion_grado_requisitos
            },
            PABecas: {
                PAB_start: req.body.PAB_start,
                PAB_requisitos: req.body.PAB_requisitos
            },
            PADescargas: req.body.PADescargas

        },
        docentes: {
            NADocentes: req.body.NADocentes,
            NARepositorio_tesis: req.body.NARepositorio_tesis
        }

        ,
        Estudiantes: {

            Estudiante: req.body.Estudiante

        },
        vinculacion: {
            VInformacion: req.body.VInformacion,
            VConvenios: req.body.VConvenios
        },
        contacto: {
            CTelefonos: req.body.CTelefonos,
            CRedes: req.body.CRedes,
            CDireccion: req.body.CDireccion,
            CCorreo: req.body.CCorreo
        },
        normas_estatutos: {
            NEInformacion: req.body.NEInformacion


        }

    };
    const updatedMaster = await Maestria.findByIdAndUpdate(id,maestria);
    return res.json({
        message: 'Successfully updated',
        updatedMaster
    });
}