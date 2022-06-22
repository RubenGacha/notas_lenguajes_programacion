<template>
    <div id="cuerpo">
        <h1>usar archivos externos</h1>

        <h2>Archivos de texto y binarios</h2>
        <p>existen dos tipos de archivos los de texto y los binarios en los de texto podemos encontrar extenciones como
            <em class="enfasis">.json, .xml, .py, .txt, .css, .js, .csv</em> y en el de los binarios podemos encontrar
            <em class="enfasis">.png, .mp3,
                .jpg, .avi, .dll, .mp4</em>
        </p>

        <p>la diferencia son los bits que en los de texto solo representan letras mientras que los binarios los bits
            pueden representar mas cosas.</p>

        <h2>Archivos de texto</h2>
        <p>existen varios modos de apertura que son:</p>
        <ul>
            <li><em>R</em> Lectura</li>
            <li><em>W</em> escritura (sobreescribiendo)</li>
            <li><em>A</em> agregar contenido.</li>
        </ul>
        <p>aqui se presentan dos formas de abrir la conexion al archivo. la forma antigua de crear una variable para
            procesar el archivo y la otra usando el manejador contextual <em class="enfasis">with</em> que permite
            prevenir el daño al
            archivo leido.</p>

        <pre v-highlightjs><code class="python">archivo=open("rutaArchivo","modo de apertura")</code></pre>

        <pre v-highlightjs><code class="python">with open("rutaArchivo", "modo de apertura") as f:</code></pre>

        <h3>leer el contenido del archivo</h3>

        <pre v-highlightjs><code class="python">def read():
    archivo=open("rutaArchivo","r",encoding="UTF-8")
    textoArchivo=archivo.read() #lee todo el archivo y lo guarda en una variable texto
    lineas=archivo.readlines() #lee todo el archivo y lo guarda en una coleccion por linea.
    archivo.close()</code></pre>

        <pre v-highlightjs><code class="python">def read():
    with open("rutaArchivo","r",encoding="UTF-8") as f:
        for line in f:
            pass</code></pre>

        <div class="importante">
            <em>notas:</em> se puede modificar el puntero de donde inicia a leer.
            <ul>
                <li><em>archivo.seek(11)</em> desplaza el cursor al inicio del archivo y se mueve 11 caracteres.</li>
                <li><em>archivo.read(11)</em> lee hasta el caracter 11 del archivo.</li>
            </ul>
        </div>

        <h2>Escritura</h2>

        <pre v-highlightjs><code class="python">def write():
    archivo=open("rutaArchivo","w",encoding="UTF-8")
    #escribe en el archivo lo que se encuentra como parametro.
    archivo.write("lo que se quiere escribir")
    #escribe en una linea cada elemento de la coleccion.
    archivo.writelines(coleccion) 
    archivo.close()</code></pre>

        <pre v-highlightjs><code class="python">def write():
    names=["facundo","Miguel","Pepe","Cristian"]
    with open("rutaArchivo","w",encoding="UTF-8") as f:
        for name in names:
            f.write(name)
            f.write("\n")</code></pre>

        <h2>Agregar</h2>

        <pre v-highlightjs><code class="python">def add():
    archivo=open("rutaArchivo","a",encoding="UTF-8")
    #escribe en el archivo lo que se encuentra como parametro.
    archivo.write("lo que se quiere escribir") 
    #escribe en una linea cada elemento de la coleccion.
    archivo.writelines(coleccion) 
    archivo.close()</code></pre>

        <pre v-highlightjs><code class="python">def add():
    names=["facundo","Miguel","Pepe","Cristian"]
    with open("rutaArchivo","a",encoding="UTF-8") as f:
        for name in names:
            f.write(name)
            f.write("\n")</code></pre>
    </div>
</template>