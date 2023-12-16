"use server";
import axios from "axios"
import { NextResponse } from "next/server"
import { Repo } from "../types"

const BASE_URL = 'https://api.github.com'

export const getRepositoriesByPage = async () => {
    try {
      const { data } = await axios.get<{ items: Repo[] }>(`${BASE_URL}/search/repositories?q=stars:>1000&sort=stars&per_page=100&page=1`)
      return data.items
    } catch (error: any) {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }