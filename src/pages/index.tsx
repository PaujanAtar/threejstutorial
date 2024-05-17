import { useEffect, useRef } from "react"
import Head from "next/head"
import { Inter } from "next/font/google"
import * as THREE from "three"
import styles from "@/styles/Home.module.scss"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene
    const scene = new THREE.Scene()

    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Sizes
    const sizes = {
      width: 800,
      height: 600,
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    scene.add(camera)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    })
    renderer.setSize(sizes.width, sizes.height)

    renderer.render(scene, camera)
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <canvas ref={canvasRef}></canvas>
      </main>
    </>
  )
}
