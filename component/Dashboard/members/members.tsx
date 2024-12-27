import SubMembers from "./SubMembers";

const ItemArr : Array<{ numbers: string, description : string}>=[
    {
        numbers : "3+",
        description : "Years driving growth"
    },
    {
        numbers : "15+",
        description : "Projects complete successfully"
    },
    {
        numbers : "1M+",
        description : "Earned"
    },
    {
        numbers : "215%",
        description : "Customers Achieved"
    }
]

export default function Members() {
  return (
    <div className="px-[30px] sm:px-[100px] pt-[28px] pb-[32px] bg-[#008DF1] mt-[20px]">
      <p className="text-white text-center text-[16px] mb-[20px] mt-[8px]">
      Our results in numbers
      </p>
      <div className=" flex justify-between items-center max-w-[1220px] mx-auto gap-[35px] ">
        {ItemArr.map((item, idx: number) => (
          <SubMembers key={idx} numbers={item.numbers} description={item.description} />
        ))}
      </div>
    </div>
  );
}
