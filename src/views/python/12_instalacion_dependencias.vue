<template>
    <div id="cuerpo">
        <h1>Instalacion de Dependencias</h1>

        <h2>PIP</h2>
        <p>El instalador de dependencias en python es <em> <abbr title="Package Installer for Python">pip</abbr></em>.
            algunos modulos que podria ser interesantes son los siguientes</p>

        <ul>
            <li>Requests</li>
            <li>BeautifulSoup4</li>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>Pytest</li>
        </ul>

        <table class="table table-dark table-striped table-hover">

            <thead>
                <tr>
                    <th scope="col">Comando</th>
                    <th scope="col">Descripcion</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td scope="row">
                        <pre v-highlightjs><code class="python">pip search xml</code></pre>
                    </td>
                    <td scope="row">Para buscar un modulo a ver como se llama</td>
                </tr>

                <tr>
                    <td scope="row">
                        <pre v-highlightjs><code class="python">pip freeze</code></pre>
                    </td>
                    <td scope="row">para poder ver que modulos tenemos</td>
                </tr>

                <tr>
                    <td scope="row">
                        <pre v-highlightjs><code class="python">pip install pandas</code></pre>
                    </td>
                    <td scope="row">para poder instalar un modulo</td>
                </tr>

                <tr>
                    <td scope="row">
                        <pre v-highlightjs><code class="python">pip install -Iv redis==2.10.5</code></pre>
                    </td>
                    <td scope="row">para instalar una version especifica</td>
                </tr>

                <tr>
                    <td scope="row">
                        <pre v-highlightjs><code class="python">pip install -U redis==2.10.5</code></pre>
                    </td>
                    <td scope="row">actualizar la libreria a una version concreta</td>
                </tr>

                <tr>
                    <td scope="row">
                        <pre v-highlightjs><code class="python">pip install -U redis</code></pre>
                    </td>
                    <td scope="row">instalar a la ultima version</td>
                </tr>

                <tr>
                    <td scope="row">
                        <pre v-highlightjs><code class="python">pip uninstall redis</code></pre>
                    </td>
                    <td scope="row">desinstala la libreria</td>
                </tr>

                <tr>
                    <td scope="row">
                        <pre v-highlightjs><code class="python">pip show redis</code></pre>
                    </td>
                    <td scope="row">muestra informacion de la libreria</td>
                </tr>

            </tbody>

        </table>

        <p>para compartir el proyecto y que tenga los modulos necesarios para poder funcionar correctamente se debe
            usar
            un comando que creara el archivo de modulos y un comando que instalara esos modulos.</p>

        <h3>comando para crear el archivo de modulos</h3>

        <pre v-highlightjs><code class="python">pip freeze &#62; requirements.txt</code></pre>

        <h3>comando para instalar los modulos</h3>
        <pre v-highlightjs><code class="python">pip install -r requirements.txt</code></pre>

        <h2>Anacanda</h2>
        <p>es un software de manegador de dependencias grafico usado normalmente para ciencia de datos. nos permite
            crear entornos virtuales, instalar modulos aunque el mas usado es pip</p>
    </div>
</template>