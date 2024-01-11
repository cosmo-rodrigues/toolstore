import {create} from "zustand"
import { devtools, persist } from "zustand/middleware"

interface UserStore {
  userId: string
  isAuthenticated: boolean
  username: string
  email: string
  setUser: (userId: string, username: string, email: string,) => void
  logoutUser: () => void
}

type SetState = (fn: (prevState: UserStore) => UserStore) => void

const userStore = (set: SetState): UserStore => ({
  userId: "",
  isAuthenticated: false,
  username: "",
  email: "",
  setUser(userId: string, username: string, email: string,) {
    set((state: UserStore) => ({
      ...state,
      userId: userId,
      isAuthenticated: true,
      username: username,
      email: email,
    }))
  },
  logoutUser() {
    set((state: UserStore) => ({
      ...state,
      userId: "",
      isAuthenticated: false,
      username: "",
      email: "",
    }))
  },
})

export const useUserStore = create(devtools(persist(userStore, { name: "userStore" })))
