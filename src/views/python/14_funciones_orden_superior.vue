<template>
    <div id="cuerpo">
        <h1>Funciones de orden superior en python</h1>

        <p>las funciones de orden superior son funciones que resive como parametro otra funcion existen tres funciones
            que son importantes que son <em class="enfasis">filter</em>, <em class="enfasis">map</em> y <em
                class="enfasis">reduce</em>
        </p>

        <h2>filter</h2>
        <p>como su nombre lo indica realiza un filtro de algun tipo de coleccion, y devuelve un objeto iterador por lo
            tanto se usa la funcion <em class="enfasis">list</em> para convertirlo en una lista</p>
        <pre v-highlightjs><code class="python">my_list=[1,4,5,6,9,13,19,21]

#usando la funcion filter
odd=list(filter(lambda x: x%2 != 0, my_list))</code></pre>

        <p>como se puede ver la funcion filter tiene dos parametros el primero es una funcion que recibe el dato de una
            coleccion y el segundo es la coleccion.</p>

        <h2>map</h2>

        <p>se usa para operar toda la coleccion en este ejemplo se elevara al cuadrado todos los elementos de la
            coleccion y recibe los mismos argumentos que filter</p>

        <pre v-highlightjs><code class="python">my_list=[1,4,5,6,9,13,19,21]

#usando la funcion map
reised=list(map(lambda x: x**2 != 0, my_list))</code></pre>

        <h2>reduce</h2>
        <p>como su nombre lo indica intenta reduccir la coleccion a un solo elemento para esto se itera el elemento y el
            siguiente osea la funcion que recibe reduce necesita dos argumentos.</p>

        <pre v-highlightjs><code class="python">from functools import reduce

my_list=[1,4,5,6,9,13,19,21]
#usando la funcion reduce
all_multiplied=reduce(lambda a,b: a*b, my_list)</code></pre>
    </div>
</template>