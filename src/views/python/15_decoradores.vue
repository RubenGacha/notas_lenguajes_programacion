<template>
    <div id="cuerpo">
        <h1>Decodadores en python</h1>

        <p>son funciones de orden superior que añaden funcionalidades a otras funciones.</p>

        <p>como ejemplo se tienen dos funciones de suma y resta y se quiere agregar a la funcionalidad un mensaje de
            inicio y otra al final de la ejecucion. para esto se hace de la siguiente forma.</p>

        <pre v-highlightjs><code class="python">@funcion_decoradora
def suma():
    print(15+20)

def resta():
    print(30-10)

def funcion_decoradora(funcion_parametro):
    def funcion_interior():
        print("vamos a realizar un calculo: ")
        funcion_parametro()
        print("Hemos terminado el calculo")
    return funcion_interior

suma()</code></pre>

        <p>se debe observar que para indicarle a python que use la funcion decoradora se usa una arroba <em
                class="enfasis">@</em> y se
            llama a la funcion antes de la funcion que queremos decorrar. en este caso es la funcion suma a la que se le
            hace la decoracion.</p>

        <h2>funciones decoradoras cuando la funcion a decorar reciben parametros</h2>

        <p>en muchos casos lo que se quiere es decorar funciones que reciben parametros para esto se le debe indicar a
            las funciones internas que van a recibir argumentos usando el simbolo de multiplicar le indica a python que
            va a recibir x cantidad de parametros por convencion se usa <em class="enfasis">*args</em></p>
        <pre v-highlightjs><code class="python">@funcion_decoradora
def suma(num1,num2):
    print(num1+num2)

def funcion_decoradora(funcion_parametro):
    def funcion_interior(*args):
        print("vamos a realizar un calculo: ")
        funcion_parametro(*args)
        print("Hemos terminado el calculo")
    return funcion_interior

suma(5,20)</code></pre>

        <h2>argumentos clave valor</h2>

        <p>cuando se quiere pasar argumentos de clave valor se usa el doble asterisco para indicar que va a recibir
            argumentos con clave valor por convencion se usa <em class="enfasis">**kwargs</em></p>
        <pre v-highlightjs><code class="python">@funcion_decoradora
def potencia(base,exponente):
    print(pow(base,exponente))

def funcion_decoradora(funcion_parametro):
    def funcion_interior(*args,**kwargs):
        print("vamos a realizar un calculo: ")
        funcion_parametro(*args,**kwargs)
        print("Hemos terminado el calculo")
    return funcion_interior

potencia(base=5,exponente=3)</code></pre>
    </div>
</template>