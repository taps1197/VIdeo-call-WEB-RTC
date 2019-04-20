// replace these values with those generated in your TokBox Account
var apiKey = "46313402";
var sessionId = "2_MX40NjMxMzQwMn5-MTU1NTc2MDU1ODY3MX5wbzBYU29qblI1UnR1bGdDSGdmakhOUUJ-fg";
var token = "T1==cGFydG5lcl9pZD00NjMxMzQwMiZzaWc9Nzg0ZjIzZjdlZTJjY2JkYTcyNjgyMjVkMjQxYjg4ZmNkNWExOWQzNDpzZXNzaW9uX2lkPTJfTVg0ME5qTXhNelF3TW41LU1UVTFOVGMyTURVMU9EWTNNWDV3YnpCWVUyOXFibEkxVW5SMWJHZERTR2RtYWtoT1VVSi1mZyZjcmVhdGVfdGltZT0xNTU1NzYwNTY3Jm5vbmNlPTAuNDE0NDM1NjU1NDcwNjE2OCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTU4MzUyNTY2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});
  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
