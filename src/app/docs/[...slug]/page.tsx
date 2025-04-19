
export default async function Doc({params}: {params: {slug: string[]}}) {
    const { slug } = await params;
    console.log('slug', slug)
    return (
     <div>Doc Page</div>
    );
  }
  