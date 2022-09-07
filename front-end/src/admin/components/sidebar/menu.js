import SchoolIcon from '@mui/icons-material/School';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const menus =[
    {
        id: 1,
        title: "Area Personal",
        path: "/admin",
        icon: <AccountCircleIcon />,
    },
    {
        id:2,
        title:"Cursos",
        icon:<SchoolIcon/>,
        submenus:[
            {
                id:1,
                title:"Crear Curso",
                path:"/admin/cursos/crear"
            },
            {
                id:2,
                title:"Ver Cursos",
                path:"/admin/cursos/ver"
            }
        ]
    },
    {
        id:3,
        title:"Docentes",
        icon:<PersonIcon/>,
        submenus:[
            {
                id:1,
                title:"Crear Docente",
                path:"/admin/docentes/crear"
            },
            {
                id:2,
                title:"Ver Docentes",
                path:"/admin/docentes/ver"
            }
        ]
    },
    {
        id:4,
        title:"Registrar Pago Realizado",
        icon:<PaymentIcon/>,
        path:"/admin/pagos/crear"
    },
    {
        id:5,
        title:"Estudiantes",
        icon:<PersonIcon/>,
        submenus:[
            {
                id:1,
                title:"Crear Estudiante",
                path:"/admin/estudiantes/crear"
            },
            {
                id:2,
                title:"Ver Estudiantes",
                path:"/admin/estudiantes/ver"
            }
        ]
    },
    {
        id:6,
        title:"Gestion de Usuarios",
        icon:<AccountCircleIcon/>,
        submenus:[
            {
                id:1,
                title:"Descargar lista de estudiantes",
                path:"/admin/usuarios/estudiantes"
            },
            {
                id:2,
                title:"Descargar lista de docentes",
                path:"/admin/usuarios/docentes"
            }
        ]
    },
    {
        id:7,
        title:"Certificados",
        icon:<SchoolIcon/>,
        submenus:[
            {
                id:1,
                title:"Subir Plantilla de certificado",
                path:"/admin/certificados/plantilla"
            },
            {
                id:2,
                title:"Configuraciones",
                path:"/admin/certificados/configuraciones"
            }
        ]
    }
]
export default menus;