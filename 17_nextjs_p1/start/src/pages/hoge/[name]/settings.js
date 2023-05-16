import { useRouter } from "next/router";

export default function Settings({ query }) {
  const router = useRouter()
  const clickHandler = () => {
    router.reload()
  }
  console.log(router)
  return (
    <>
      <h1>routerから取得：{ router.query.key }</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  )
}
