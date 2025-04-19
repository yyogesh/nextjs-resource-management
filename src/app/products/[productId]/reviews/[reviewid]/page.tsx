import { notFound } from "next/navigation";

const ReviewId = async ({params} : {params: Promise<{productId: string; reviewid: string}>}) => {
    const { productId, reviewid } = await params;

    if(parseInt(reviewid) > 100) {
        notFound()
    }
    return (
      <div>Product {productId} review {reviewid}</div>
    )
  }
  
  export default ReviewId