import { type DistroProps } from '@/app/interfaces/intefaces'
import { Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react'

export function Distro({ name, text, icon, url }: DistroProps): JSX.Element {
  return (
    <Card className="flex flex-col justify-between p-2">
      <CardHeader className="flex gap-3">
        {icon}
        <h4>{name}</h4>
      </CardHeader>
      <CardBody>
        <p>{text}</p>
      </CardBody>
      <CardFooter>
        <Link
          showAnchorIcon
          className="font-bold"
          color="primary"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita la página oficial
        </Link>
      </CardFooter>
    </Card>
  )
}
