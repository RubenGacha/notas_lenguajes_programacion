<template>
  <div id="cuerpo">
    <h1>Ambiente virtual python</h1>

    <p>se usa para tener separado los modulos de cada proyecto que usan python esto por si cuando hay una actualizacion
      de python. no afecte el codigo de los demas proyectos. para esto se crea la nueva carpeta del proyecto. y una vez
      se ingresa a esta carpeta se ejecuta en terminal el siguiente comando.</p>

    <pre v-highlightjs><code class="python">py -m venv venv</code></pre>

    <p>el primer <em class="enfasis">venv</em> le indica a python que cree un ambiente virtual (virtual enviroment) y el segundo es el
      nombre de la carpeta donde se creara el ambiente por convencion es venv o env</p>

    <p>una vez que se crea el ambiente se debe activar para esto se debe ejecutar el siguiente comando</p>

    <h2>windows</h2>
    <pre v-highlightjs><code class="python">.\venv\Scripts\activate</code></pre>

    <h2>linux o mac</h2>
    <pre v-highlightjs><code class="python">source venv/bin/activate</code></pre>

    <p>para desactivar el ambiente se usa el siguiente comando</p>

    <pre v-highlightjs><code class="python">deactivate</code></pre>

    <p>otra forma de crear un ambiente virtual es usando <em class="enfasis">pyvenv</em> o <em class="enfasis">virtualenv</em></p>
  </div>
</template>