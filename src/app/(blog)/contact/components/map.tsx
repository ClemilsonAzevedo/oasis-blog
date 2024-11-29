import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
})

export function MapComponent({ lat = 51.505, lng = -0.09, zoom = 13 }) {
  const [isClient, setIsClient] = useState(false)

  // Garantir que o código que depende de 'window' só execute no cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Ou algum loader enquanto o cliente é detectado
  }

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      style={{ height: '547px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>
          Localização: [{lat}, {lng}]
        </Popup>
      </Marker>
    </MapContainer>
  )
}
