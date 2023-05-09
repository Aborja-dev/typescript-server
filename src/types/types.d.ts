import express from 'express'
import http from 'http'
export type ExpressInstance = ReturnType<typeof express>
export type httpServerInstance = ReturnType<typeof http>
export type VoidPromise = Promise<void>
