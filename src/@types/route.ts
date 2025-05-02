import { JSX, LazyExoticComponent } from 'react'

export type RouteTree = {
    routeKey: string
    path: string
    routeType: "public" | "private"
    component: LazyExoticComponent<<T>(props: T) => JSX.Element>
    subRoute: RouteTree[]
}