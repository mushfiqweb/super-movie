import type { Routes } from '@/@types/routes'
import authDemoRoute from './authDemoRoute'
import authRoute from './authRoute'
import pagesRoute from './pagesRoute'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    ...pagesRoute,
    ...authDemoRoute,
]
