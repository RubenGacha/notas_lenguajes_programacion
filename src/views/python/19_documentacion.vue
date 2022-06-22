<template>
    <div id="cuerpo">
        <h1>Documentacion en python</h1>

        <p>para poder documentar nuestras clases, modulos, funciones, etc se usa la triple comilla doble, dentro de la
            "clase".</p>

        <pre v-highlightjs><code class="python">class nombreClase:
    """
        esta clase es capas de hacer muchas cosas
    """

    def funcion():
        """
            esta funcion pertenece a la clase nombre
        """</code></pre>

        <p>para poder ver la documentacion se puede usar la funcion <em class="enfasis">help</em> o la propiedad <em
                class="enfasis">__doc__</em></p>

        <pre v-highlightjs><code class="python">help(funcion)
print(funcion.__doc__)</code></pre>


        <p>cuando se quiere acceder a la documentacion de una funcion interna de la clase se debe nombrar la clase la
            notacion punto y la funcion</p>

        <pre v-highlightjs><code class="python">help(clase.funcion)
help(clase)</code></pre>

        <h2>Pruebas usando la documentacion</h2>
        <p>para poder usar la documentacion para hacer pruebas se debe usar el modulo <em class="enfasis">doctest</em>.
        </p>

        <p>para poder especificar que es lo que se ejecuta en consola se usa <em class="enfasis">&#62;&#62;&#62;</em> y
            la respuesta se
            coloca tal cual se devuelve en python</p>
        <pre v-highlightjs><code class="python">def areaTriangulo(base,altura):
    """
    Calcula el area de un triangulo dado
    &#62;&#62;&#62;areaTriangulo(3,6)
    9.0

    Calcula el area de un triangulo dado
    &#62;&#62;&#62;areaTriangulo(4,5)
    9.0

    """
    return (base*altura)/2</code></pre>

        <p>para poder evaluar las pruebas que tenemos en la documentacion se usaria el siguiente comando. si todas las
            pruebas funcionan correctamente no se mostrara nada en pantalla si alguna falla mostrara el error lo que se
            espera y lo que arrojo la prueba.</p>

        <pre v-highlightjs><code class="python">import doctest
doctest.testmod()</code></pre>


        <h2>pruebas con mas de una linea de codigo</h2>

        <p>para poder simular bloques de codigo se debe anclar las lineas que componen el bloque de codigo con tres
            puntos <em class="enfasis">...</em> y cada linea que es independiente con <em
                class="enfasis">&#62;&#62;&#62;</em></p>
        <pre v-highlightjs><code class="python">import math

"""
&#62;&#62;&#62;lista=[]
&#62;&#62;&#62;for i in [4,9,16]:
...lista.append(i)
&#62;&#62;&#62; raizCuadrada(lista)
[2.0,3.0,4.0]
"""

def raizCuadrada(listaNumeros):
    return[math.sqrt(n) for n in listaNumeros]</code></pre>

        <h2>pruebas que se consideran un error</h2>
        <p>se debe copiar el error esperado tal cual lo devolveria python en los datos esperados, para simplificar esto
            se puede usar los tres puntos <em class="enfasis">...</em> esto le indicara a python que hay texto es como
            un comodin</p>

        <pre v-highlightjs><code class="python">"""
&#62;&#62;&#62;lista=[]
&#62;&#62;&#62;for i in [4,-9,16]:
...lista.append(i)
&#62;&#62;&#62; raizCuadrada(lista)
Traceback (most recent call last):
    ...
ValueError: math domain error
"""</code></pre>
    
    </div>
</template>