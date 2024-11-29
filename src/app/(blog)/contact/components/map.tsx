import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// Configuração dos ícones do Leaflet
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
})

// Componente de mapa com marcador e popup
export function MapComponent({ lat = 51.505, lng = -0.09, zoom = 13 }) {
  const [isClient, setIsClient] = useState(false)

  // Garantir que o código que depende de 'window' só execute no cliente ( por causa do erro, window is undefined )
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Aqui pode ser adicionado um loader, isto é para esperar o componente ser montado no cliente
  }

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      style={{ height: '547px', width: '100%' }}
    >
      {/* Camada de tile do OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcador com Popup */}
      <Marker position={[lat, lng]}>
        <Popup>
          Localização: [{lat}, {lng}]
        </Popup>
      </Marker>
    </MapContainer>
  )
}
