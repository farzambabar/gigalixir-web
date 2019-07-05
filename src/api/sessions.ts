import * as api from './api'

interface Session {
}

export const check = (): Promise<{ data: Session }> =>
    api.get("/frontend/api/sessions")
        .then(response => response.data)

export const login = (username: string, password: string): Promise<{ data: Session }> =>
    api.post('/frontend/api/sessions', { session: { email: username, password: password } })
        .then(response => response.data)

export const logout = (): Promise<{}> =>
    api.del('/frontend/api/sessions')
        .then(response => response.data)