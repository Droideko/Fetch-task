const commentLists = [...document.querySelectorAll('.comment-list')];
const url = `./data.json`;
  
commentLists.forEach(commentList => {
   commentList.insertAdjacentHTML('afterbegin', `
         <div class="comment-list__loading">Loading.....</div>         
      `);
   });

function solutuion(urlOfComments) {
   getComments(urlOfComments);

   async function getComments(url) {
      const response = await fetch(url);
         try {
            const responseJson = await response.json();
            const data = responseJson['data'];
            commentLists.forEach(commentList => {
               const countOfComments = +commentList.dataset.count;
               let size = data.length;
               switch (size) {
                  case size < countOfComments:
                     size = countOfComments;
                     break;
                  case size > 100:
                     size = 100;
                     break;
                  default:
                     size = size;
                     break;
               }
               const partOfData = data.slice(size - countOfComments);
               createComment(partOfData, commentList);
            });
         } catch (error) {
            commentLists.forEach(commentList => {
               commentList.children[0].remove();
               commentList.insertAdjacentHTML('afterbegin', `
                  <div class="comment-item__crash">Something was wrong!</div>                  
               `)
            });
         }
      }
   }
   solutuion(url);

   function createComment(data, node) {
      node.children[0].remove();
      data.forEach(item => {
         const {
            username,
            message
         } = item;
         node.insertAdjacentHTML('afterbegin', `
            <div class="comment-item">
               <div class="comment-item__username">${username}</div>
               <div class="comment-item__message">${message}</div>
            </div>            
         `)
      });
   }