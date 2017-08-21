// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API

export const apiFetch = createAPI()

/**
 * 取得首页数据
 */
export function homePageData () {
  
}

export function watchList (cb) {
    let first = true
    const handler = snapshot => {
      if (first) {
        first = false
      } else {
        cb(snapshot.val())
      }
    }
  }