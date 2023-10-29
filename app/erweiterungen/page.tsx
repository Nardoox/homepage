import Uebersicht from "@/components/uebersichtComponents/uebersicht/page";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

export default function Erweiterungen() {
  return (
    <>
      <div className="platzhalter" />
      <section className="uebersichtSection">
        <div className="uebersichtSection__nav">
          <Uebersicht />
        </div>
        <div className="uebersichtSection__erweiterungen">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="Läd..."
                height={40}
                radius="sm"
                src="https://img.freepik.com/vektoren-premium/symbol-schliessen-vektorzeichen-abbrechen-symbol-html-webdesign-fehler-verweigert-vermeidung-oder-falsche-datenschaltflaeche_87543-11088.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Addon</p>
                <p className="text-small text-default-500">thisCompany.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>this is an Addon</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="priceTag">
                <p>...$ </p>
                <Button color="primary" variant="shadow">
                  Buy Addon
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="Läd..."
                height={40}
                radius="sm"
                src="https://img.freepik.com/vektoren-premium/symbol-schliessen-vektorzeichen-abbrechen-symbol-html-webdesign-fehler-verweigert-vermeidung-oder-falsche-datenschaltflaeche_87543-11088.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Addon</p>
                <p className="text-small text-default-500">thisCompany.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>this is an Addon</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="priceTag">
                <p>...$ </p>
                <Button color="primary" variant="shadow">
                  Buy Addon
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="Läd..."
                height={40}
                radius="sm"
                src="https://img.freepik.com/vektoren-premium/symbol-schliessen-vektorzeichen-abbrechen-symbol-html-webdesign-fehler-verweigert-vermeidung-oder-falsche-datenschaltflaeche_87543-11088.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Addon</p>
                <p className="text-small text-default-500">thisCompany.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>this is an Addon</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="priceTag">
                <p>...$ </p>
                <Button color="primary" variant="shadow">
                  Buy Addon
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="Läd..."
                height={40}
                radius="sm"
                src="https://img.freepik.com/vektoren-premium/symbol-schliessen-vektorzeichen-abbrechen-symbol-html-webdesign-fehler-verweigert-vermeidung-oder-falsche-datenschaltflaeche_87543-11088.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Addon</p>
                <p className="text-small text-default-500">thisCompany.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>this is an Addon</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="priceTag">
                <p>...$ </p>
                <Button color="primary" variant="shadow">
                  Buy Addon
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="Läd..."
                height={40}
                radius="sm"
                src="https://img.freepik.com/vektoren-premium/symbol-schliessen-vektorzeichen-abbrechen-symbol-html-webdesign-fehler-verweigert-vermeidung-oder-falsche-datenschaltflaeche_87543-11088.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Addon</p>
                <p className="text-small text-default-500">thisCompany.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>this is an Addon</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="priceTag">
                <p>...$ </p>
                <Button color="primary" variant="shadow">
                  Buy Addon
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="Läd..."
                height={40}
                radius="sm"
                src="https://img.freepik.com/vektoren-premium/symbol-schliessen-vektorzeichen-abbrechen-symbol-html-webdesign-fehler-verweigert-vermeidung-oder-falsche-datenschaltflaeche_87543-11088.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Addon</p>
                <p className="text-small text-default-500">thisCompany.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>this is an Addon</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="priceTag">
                <p>...$ </p>
                <Button color="primary" variant="shadow">
                  Buy Addon
                </Button>
              </div>
            </CardFooter>
          </Card>   
        </div>
      </section>
    </>
  );
}
