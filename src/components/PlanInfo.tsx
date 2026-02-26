import { PublicNoteData, cn } from "@/lib/utils"

export default function PlanInfo({ parsedData }: { parsedData: PublicNoteData }) {
  if (!parsedData || !parsedData.planDataMod) {
    return null
  }

  const extraList =
    parsedData.planDataMod.extra.split(",").length > 1
      ? parsedData.planDataMod.extra.split(",")
      : parsedData.planDataMod.extra.split(",")[0] === ""
        ? []
        : [parsedData.planDataMod.extra]

  return (
    <section className="flex gap-1 items-center flex-wrap mt-0.5">
      {parsedData.planDataMod.bandwidth !== "" && (
        <p className={cn("text-[9px] bg-blue-600 dark:bg-blue-800 text-blue-200 dark:text-blue-300  w-fit rounded-[5px] px-[3px] py-[1.5px]")}>
          {parsedData.planDataMod.bandwidth}
        </p>
      )}
      {parsedData.planDataMod.trafficVol !== "" && (
        <p className={cn("text-[9px] bg-green-600 text-green-200 dark:bg-green-800 dark:text-green-300  w-fit rounded-[5px] px-[3px] py-[1.5px]")}>
          {parsedData.planDataMod.trafficVol}
        </p>
      )}

      {parsedData.planDataMod.networkRoute && (
        <p className={cn("text-[9px] bg-blue-600 text-blue-200 dark:bg-blue-800 dark:text-blue-300  w-fit rounded-[5px] px-[3px] py-[1.5px]")}>
          {parsedData.planDataMod.networkRoute.split(",").map((route, index) => {
            return route + (index === parsedData.planDataMod!.networkRoute.split(",").length - 1 ? "" : "｜")
          })}
        </p>
      )}
      {extraList.map((extra, index) => {
        return (
          <p
            key={index}
            className={cn("text-[9px] bg-stone-600 text-stone-200 dark:bg-stone-800 dark:text-stone-300  w-fit rounded-[5px] px-[3px] py-[1.5px]")}
          >
            {extra}
          </p>
        )
      })}
    </section>
  )
}
