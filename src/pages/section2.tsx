import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Section2() {
  return (
    <section id="services" className=" bg-cyan-800/5 py-6 ">
      <div className="container px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className=" text-3xl font-bold tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            En Boinca, ofrecemos una amplia gama de servicios especializados
            para satisfacer las necesidades de nuestros clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle >Reparación de Motores Eléctricos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ofrecemos servicios de reparación y mantenimiento de motores
                eléctricos de todo tipo.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle > Reparación de Bombas Centrífugas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nuestros expertos reparan y mantienen bombas centrífugas de alta
                calidad.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle >Servicios de Torno</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ofrecemos servicios de torno para la fabricación y reparación de
                piezas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Rebabitado de Cojinetes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ofrecemos servicios de rebabado de cojinetes para prolongar la
                vida útil de los equipos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pruebas de Vibración</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Realizamos pruebas de vibración para garantizar el correcto
                funcionamiento de los equipos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Perforación de Pozos de Agua</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nuestro equipo de expertos perfora pozos de agua para satisfacer
                las necesidades de nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
