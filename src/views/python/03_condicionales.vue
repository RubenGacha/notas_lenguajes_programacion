<template>
    <div id="cuerpo">
        <h1>Condicionales en python</h1>

        <p>En python solo se maneja un tipo de condicional que es if su sintasis es la siguiente.</p>

        <pre v-highlightjs><code class="python">
edad=int(input("escribe tu edad: "))
if(edad &#62; 17):
    print("tienes mas de 17 años")
elif(edad &#60; 50):
    pass
else:
    pass</code></pre>

        <p>la palabra clave <em class="enfasis">pass</em> indica que en otro momento programaras lo que falta en ese lado pero permite
            que funcione el programa</p>

        <p>hay condicionales anidadas donde se evaluan diferentes expresiones es igual a tener un and y se evalua de
            izquierda a derecha</p>

        <pre v-highlightjs><code class="python">
edad=int(input("escribe tu edad: "))
if(0 &#60; edad &#60; 18):
    print("eres menor de edad")
elif(edad &#62; 18):
    print("eres mayor de edad")
else:
    print("no existe edades negativas")
        </code></pre>
    </div>
</template>