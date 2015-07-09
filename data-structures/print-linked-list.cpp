using namespace std;

void Print(Node *head){
  Node *temp = head;
  while(temp != NULL){
    cout << temp->data << '\n';
    temp = temp->next;
  }
}
