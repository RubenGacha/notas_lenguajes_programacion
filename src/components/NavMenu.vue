<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Num</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <!-- --------------------basico----------------------- -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Conceptos Basicos
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="(item,index) in Basico" :key=index>
                                <router-link :to="item.url" :class="['dropdown-item']">{{item.name}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- ---------------------python--------------------- -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Python
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="(item,index) in Python" :key=index>
                                <router-link :to="item.url" :class="['dropdown-item']">{{item.name}}</router-link>
                            </li>
                        </ul>
                    </li>

                    <!----------------------------------- inicio --------------------->
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Python
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="(item,index) in PrimerElemento" :key=index>
                                <router-link :to="item.url" :class="['dropdown-item']">{{item.name}}</router-link>
                            </li>
                        </ul>
                    </li> -->
                    <!--------------------------------- fin ---------------------->

                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:"NavMenu",
    data:()=>{
        return {
            Basico:[
                { name: "Paradigma", url:"/conceptosBasicos/paradigma"},
                { name:"Niveles de programacion", url:"/conceptosBasicos/niveles"},
                { name: "Tipado", url: "/conceptosBasicos/tipado" }
            ],
            Python:[
            { name: "Introduccion", url:"/python/introduccion"},
            { name: "Operadores", url:"/python/operadores"},
            { name: "Condicionales", url:"/python/condicionales"},
            { name: "Funciones", url: "/python/funciones" },
            { name: "Funciones con String", url: "/python/funciones_string" },
            { name: "Bucles", url: "/python/bucles" },
            { name: "Listas", url: "/python/listas" },
            { name: "Tuplas", url: "/python/tuplas" },
            { name: "Diccionarios", url: "/python/diccionarios" },
            { name: "Principios zen", url: "/python/principios_zen" },
            { name: "Ambiente virtual", url: "/python/ambiente" },
            { name: "Instalacion de dependencias", url: "/python/instalacion_dependencias" },
            { name: "Funciones Lambda", url: "/python/funciones_lambda" },
            { name: "Funciones Orden Superior", url: "/python/funciones_orden_superior" },
            { name: "Decoradores", url: "/python/decoradores" },
            { name: "Excepciones", url: "/python/excepciones" },
            { name: "Archivos externos", url: "/python/archivo_externos" },
            { name: "Iteradores", url: "/python/iteradores" },
            { name: "Documentacion", url: "/python/documentacion" },
            { name: "Pruebas Debugging", url: "/python/pruebas_debugging" },
            { name: "POO", url: "/python/poo" },
            { name: "Paginas para saber mas python", url: "/python/paginas_ver" },
            ]
        }
    }

}
</script>

<style>
nav a.router-link-exact-active {
  color: #DC2F02;
}
</style>