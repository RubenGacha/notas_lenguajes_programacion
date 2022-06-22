<template>
    <div id="cuerpo">
        <h1>Pruebas y debugging</h1>

        <h2>Pruebas de caja negra</h2>

        <p>lo que se hace en este tipo de pruebas es que se ingresan algunas entradas y se valida la salida con la
            salida esperada si la entrada y la salida son iguales se considera que paso la prueba. sin importar que haga
            internamente.</p>

        <p>en esta categoria estan <em class="enfasis">Unit testing</em> y <em class="enfasis">integration testing</em>
        </p>
        <pre v-highlightjs><code class="python">import unittest

class CajaNegraTest(unittest.TestCase):

    def test_suma_dos_porsitivos(self):
        num_1=10
        num_2=5
        resultado suma(num_1,num_2)
        self.assertEqual(resultado,15)

def suma(num_1,num_2):
    return num_1+num2

if __name__=='__main__':
    unittest.main()</code></pre>

        <h2>Pruebas de caja de cristal</h2>
        <p>se basan en el flujo del programa, haciendo prueba de todos los caminos posibles de una funcion.
            ramificaciones, bucles for y while, recursion. y en este tipo de pruebas estan <em
                class="enfasis">Regression testing</em> o
            <em class="enfasis">mocks</em>
        </p>

        <pre v-highlightjs><code class="python">import unittest

def es_mayor_de_edad(edad):
    if edad >=18:
        return true
    else:
        return false


class CajaNegraTest(unittest.TestCase):

    def test_es_mayor_de_edad(self):
        edad=20
        resultado=es_mayor_de_edad(edad)
        self.assertEqual(resultado,true)
    
    def test_es_menor_de_edad(self):
        edad=15
        resultado=es_mayor_de_edad(edad)
        self.assertEqual(resultado,false)

if __name__=='__main__':
    unittest.main()</code></pre>

        <h2>Debugging</h2>
        <p></p>

        <ul>
            <li>Encuentra a los sopechosos comunes</li>
            <li>En lugar de preguntarte por que un programa no funciona, preguntate por que esta funcionando de esta
                manera.</li>
            <li>Es posible que el bug no se encuentre donde crees que está: has busqueda binaria</li>
            <li>Explicale el problema a otra persona. De preferencia que no tenga contexto. la prueba del pato.</li>
            <li>Lleva un registro de lo que has tratado, preferentemente en la forma de tests.</li>
            <li>vete a dormir.</li>
        </ul>
    </div>
</template>