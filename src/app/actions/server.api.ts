"use server";
import { NextResponse } from "next/server";
import { db } from "../mongo/mongodb";
import { Favorite } from "../types";
import { extractUser } from "../authentication/auth";

export const getFavorites = async () => {
  const userId = extractUser()

  try {
    const dbConnection = await db()
    const favorites = await dbConnection.collection<Favorite>('favorites').find({ userId }).toArray()
    return favorites.map(favorite => favorite.repoId)
  } catch (error: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export const toggleFavorite = async ({ repoId }: { repoId: string}) => {
  const userId = extractUser()

  const dbConnection = await db()
  const collection = dbConnection.collection('favorites')
  const isFavorite = await collection.findOne({ userId, repoId })

  try {
    const action = isFavorite ? collection.deleteOne({ userId, repoId }) : collection.insertOne({ userId, repoId })
    await action
    return
  } catch (error: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}