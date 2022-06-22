<template>
    <div id="cuerpo">
        <h1>Paradigmas de la programacion</h1>
        <p>hacen referencias a los modelos que se usaron para crear un lenguaje y la estructura que se sigue para crear
            un programa atraves de estos.</p>

        <h2>Imperativo y derivados</h2>

        <p>Son programas lineales que usando instrucciones ordenadas llega a resolver problemas, este tipo de paradigma crearon tres estilos los cuales son los estructurados (permite la creacion de estructuras de control como if, while y for para evitar los saltos de linea con goto), los procedimentales (divide el programa en codigo mas pequeño que se puede reutilizar) y los modulares (son trosos de codigo totalmente funcionales que pueden usarse independientemente y ser usados en otros desarrollos), algunos lenguajes imperativos son: COBOL, Algol, Basic y C</p>

        <h2>Orientado a objetos (POO)</h2>

        <p>hace referencia a que todo se puede interpretar como un objeto y por ende se puede llevar a la programacion teniendo presente sus atributos (propiedades) y sus metodos (actividades) este tipo de paradigma tiene dos variantes los que construyen el objeto atraves de clases o los que los crean a traves de prototipos, en el primer grupo tenemos lenguajes como java, c++ mientras en el segundo grupo tenemos Lua, Javascript.</p>

        <p>la gran diferencia es que en el primer grupo es que permite <em class="enfasis">instanciacion</em> que puede permitir afinidad entre clases, mientras en el segundo no existe este concepto ya que los objetos son solo contenedores de metodos estaticos.</p>

        <p>En este paradigma se tiene 4 principios</p>

        <dl>
            <dt>La encapsulacion</dt>
            <dd>Lo que hace es separar la informacion del objeto, haciendo ocultas algunas de sus funciones o propiedades para que no sean accesibles desde el exterior.</dd>

            <dt>la abstaccion</dt>
            <dd>Es la creacion de metodos que permiten la interaccion con el objeto, esto permite la modificacion de las propiedades de forma controlada.</dd>

            <dt>la herencia:</dt>
            <dd>Este principio lo que hace es que un objeto pueda adquirir las propiedades y metodos de otra clases como su nombre lo indica se heredan estas caracteristicas</dd>

            <dt>el polimorfirmo</dt>
            <dd>Hace referencia al comportamiento que tiene cada objeto. un ejemplo seria como caminar dependiendo quien camina si un pato o un perro tiene su propia forma pero la funcion seria la misma caminar.</dd>
        </dl>
        
        <h2>Orientado a componentes (POC)</h2>
        <p>Es un paradigma donde se estructura el codigo en bloques reutilizables, creando funciones genericar progresando en el mantenimiento de las aplicaciones y se concidera que el nivel de abstraccion es mas alto que el de los objetos.</p>

        <h2>Orientada a eventos (POE)</h2>

        <p>Hace referencia a centrarce en los eventos que puede tener un sistema. y estos eventos son determinados ya sea por el usuario o por el propio sistema y dependiendo de estos eventos el sistema tendra un comportamiento.</p>

        <h2>Orientada a aspectos (POA)</h2>

        <p>Es basada en crear modulos que dan solucion a una obligacion o aspecto haciendo la separaccion del codigo en aspectos y no en objetos. esto se puede interpretar como el aspecto de caminar partiendo de la programacion orientada a objetos tendriamos varias clases que implementan este metodo pero en la programacion orientada a aspectos tendriamos un aspecto que seria usada por las demas clases.</p>

        <h2>Programacion Funcional (FP)</h2>

        <p>Esta basada en utilizar funciones evitando asi datos mutables, en este paradigma las funciones son tratadas como variables, entradas o salida de datos o como parametros de otras funciones.  </p>

        <h2>Logico</h2>

        <p>Este paradigma nos permite resolver problemas a nivel logico y el lenguaje usado para este paradigma es prolog. consiste en crear una serie de reglas aplicables a los datos mediante un motor de inferencia. </p>

        <h2>Programacion por restricciones.</h2>
        <p>donde las relaciones entre las variables son expresadas en terminos de restricciones(ecuaciones), lo que provoca que deben ser satisfechas para dar solucion al problema planteado. en otras palabra se programa lo que queremos y no como se hace. </p>

        <h2>Programacion concurrente</h2>
        <p>Es basado en la capacidad del hardware moderno permitiendo crear tareas silmultaneas o concurrentes. </p>

        <h2>Programacion por contrato</h2>
        <p>permite la programacion usando precondiciones y postcondiciones, que permiten incrementar la calidad del codigo implementando pruebas para asegurar de que el codigo base se comporta como se requiere. </p>
    
    </div>
</template>