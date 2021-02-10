/**THE EVENT LOOP
 * Every program has exactly one event loop.
 */

 // node myFile.js 

 const pendingTimer = []
 const pendingOSTasks = []
 const pendingOperations = []



 myFile.runContents()

function shouldContinue() {
  // 1. check one: node checks if any pending functions have been set with setTimeout, setInterval or setImmediate 
  // 2. check two: node checks for any pending OS tasks (like server listening to a port)
  // 3. check three: node checks for any pending long running operations (like fs module (used to read/write info on hard drive))
// entire body of event loop executes in one 'tick'
 return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

while(shouldContinue()) {
  // 1. Node looks at pendingTimers and sees if any functions are ready to be called w/ setTimeout || setInterval

  // 2. Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks


  // 3. pause execution.  Continue when...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete.

  // 4. look at pendingTimers.  call any setImmediate.

  // 5. handle any 'close' events.

  
}


 // exit back to terminal