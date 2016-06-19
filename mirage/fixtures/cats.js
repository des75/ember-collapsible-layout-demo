var cats = [];

for(let i = 1; i < 19; i++){
  cats.push({
    id: i,
    type: "cats",
    attributes: {
      url: `/ember-collapsible-layout-demo/images/cats/${i}.jpg`,
      title: `Cat #${i}`
    }
  });
}

export default cats;
