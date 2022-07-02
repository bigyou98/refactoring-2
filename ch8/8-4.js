// 8.4 문장을 호출한 곳으로 옮기기

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((photo) => photo.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      outStream.write(`<p>title: ${p.title}</p>\n`);
      outStream.write(`<p>date: ${p.date.toDateString()}</p>\n`);
      outStream.write(`<p>location: ${p.location}</p>\n`);
      outStream.write("</div>\n");
    });
}

function renderPhoto(outStream, aPhoto) {
  outStream.write("");
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}
