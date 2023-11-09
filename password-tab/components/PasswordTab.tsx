// PasswordTab.tsx

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const PasswordTab: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSavePassword = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Proceed with the password update logic
  };

  return (
    <Tabs.Root defaultValue="account" className="w-full max-w-md mx-auto">
      <Tabs.List className="flex space-x-1 bg-gray-200 p-1 rounded-xl">
        <Tabs.Trigger value="account" className="flex-1 py-2 rounded-lg text-center">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger value="password" className="flex-1 py-2 rounded-lg text-center">
          Password
        </Tabs.Trigger>
      </Tabs.List>

      {/* Account Tab Content */}
      <Tabs.Content value="account" className="p-4 bg-white rounded-xl shadow-md mt-2">
        {/* ... Account form fields ... */}
      </Tabs.Content>

      {/* Password Tab Content */}
      <Tabs.Content value="password" className="p-4 bg-white rounded-xl shadow-md mt-2">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Current password</Label>
              <Input id="currentPassword" type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="newPassword">New password</Label>
              <Input id="newPassword" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleSavePassword}>Save password</Button>
          </CardFooter>
        </Card>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default PasswordTab;
